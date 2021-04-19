import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import body from '../images/landing/body.svg'
import Modal from './Global/Modal'

const modalTitle = 'หมายเหตุ'
const modalContent =
  'เว็บไซต์นี้เกิดขึ้นจากความร่วมมือของทีมงาน ไรซ์ อิมแพค และมูลนิธิสถาบันวิจัยและพัฒนา ผู้สูงอายุไทย (มส.ผส.) เพื่อรับฟังและสื่อสาร เชิงนโยบาย ภายใต้โครงการแผนงานยุทธศาสตร์ เป้าหมาย (Spearhead) ด้านสังคม แผนงาน ศักยภาพและโอกาสของผู้สูงวัย<br/><br/> ข้อมูลของท่านจะถูกเก็บรักษาเป็นอย่างดี และจะไม่ถูกนำไปใช้ในเชิงพาณิชย์อย่างเด็ดขาด นอกจากใช้ในการพัฒนาข้อเสนอเชิงนโยบาย เท่านั้น'
const modalButton = 'ยอมรับและไปต่อ'

const Landing = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleAction = (action: boolean, continues: boolean) => {
    setShowModal(action)
    if (continues) {
      navigate('/profile')
    }
  }

  return (
    <section className="fixed h-full w-full bg-[#2208b2]">
      <div className="flex justify-center w-full">
        <img src={body} alt="body" className="absolute bottom-0 z-0 w-full sm:h-full" />
      </div>
      <div className="relative z-10 flex flex-col justify-end h-full py-8">
        <h1 className="py-4 text-2xl font-light text-center text-white">
          หากความทรงจำของคุณ
          <br /> ค่อยๆ เลือนหายไป
        </h1>
        <p className="py-4 text-xl font-pridi font-light text-center text-[#a7a5f0]">
          ชวนคุณมาสัมผัสประสบการณ์สมองเสื่อม
          <br />
          เพื่อพัฒนาระบบคัดกรองคัดแยก
          <br />
          ที่ดียิ่งขึ้นสำหรับทุกคน
        </p>
        <div className="flex justify-center h-16 pt-4">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className={`${
              showModal ? 'hidden' : 'inline-flex'
            }  items-center px-6 py-2 text-lg font-medium border rounded-md border-[#a7a5f0] text-[#a7a5f0] hover:text-[#6866E7] hover:border-gray-50 hover:bg-gray-50 focus:outline-none`}
          >
            เข้าสู่เว็บไซต์
          </button>
        </div>
      </div>
      {showModal ? (
        <Modal
          title={modalTitle}
          content={modalContent}
          buttonText={modalButton}
          isShown={showModal}
          setOpenModal={(active, continues) => handleAction(active, continues)}
        />
      ) : (
        ''
      )}
    </section>
  )
}

export default Landing
