import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import body from '../../images/simulate/human-body.svg'
import Modal from '../Global/Modal'

const modalTitle = 'หมายเหตุ'
const modalContent =
  'เหตุการณ์ต่อไปนี้เป็นเรื่องที่สมมติขึ้น อาการที่ตัวละครพบในเนื้อเรื่อง อาจไม่ใช่อาการทั้งหมด ที่ใกล้เคียงกับอาการที่ผู้สูงอายุพบในชีวิตจริง<br/><br/> หากคุณสงสัยว่าตัวเองหรือผู้สูงอายุในครอบครัว มีความเสี่ยง  สามารถทำการคัดกรองเบื้องต้น ด้วยตนเองผ่านลิงก์แบบทดสอบหน้าสุดท้ายของ เว็บไซต์'
const modalButton = 'ยอมรับและไปต่อ'

interface Props {
  bgColor?: string
}

const SimulateLanding: FC<Props> = ({ bgColor }): JSX.Element => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleAction = (action: boolean, continues: boolean) => {
    setShowModal(action)
    if (continues) {
      navigate('/simulate/1')
    }
  }

  return (
    <div className="fixed w-full h-full bg-black">
      <div className="flex justify-center w-full">
        <img src={body} alt="body" className={`absolute bottom-0 z-0 h-full ${bgColor}`} />
      </div>
      <section className="relative z-10 flex flex-col justify-end h-full py-8">
        <h1 className="py-4 mb-12 text-2xl font-light text-center text-white">
          หากความทรงจำของคุณ
          <br /> ค่อยๆ เลือนหายไป
        </h1>
        <div className="flex justify-center h-16 pt-4">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className={`${
              showModal ? 'hidden' : 'inline-flex'
            }  items-center px-6 py-2 text-lg font-medium border rounded-md border-[#a7a5f0] text-[#a7a5f0] hover:text-[#6866E7] hover:border-gray-50 hover:bg-gray-50 focus:outline-none`}
          >
            เข้าสู่บทบาทสมมติ
          </button>
        </div>
      </section>
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
    </div>
  )
}

export default SimulateLanding
