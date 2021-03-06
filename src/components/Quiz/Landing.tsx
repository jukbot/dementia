import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckLight, CrossLight } from '../Icons'

interface Props {
  bgColor?: string
}

const QuizLanding: FC<Props> = ({ bgColor }): JSX.Element => {
  const navigate = useNavigate()

  return (
    <section className={`${bgColor} flex flex-col h-full p-8 justify-between overflow-auto`}>
      <div className="text-center text-white sm:space-y-2">
        <h1 className="text-xl font-normal sm:text-2xl">คุณรู้จัก</h1>
        <h2 className="text-3xl text-4xl font-medium">ภาวะสมองเสื่อม</h2>
        <h2 className="text-xl font-normal sm:text-2xl">ดีแค่ไหน</h2>
      </div>
      <div className="flex justify-center py-4">
        <div className="border-[#a7a5f0] border-2 w-28 h-28 flex items-center justify-center rounded-full">
          <span className="font-light leading-none text-white font-pridi text-7xl">?</span>
        </div>
      </div>
      <div>
        <p className="text-xl font-light text-center text-white sm:text-2xl">
          ลองทายดูซิว่า
          <br />
          ข้อมูลภาวะสมองเสื่อมต่อไปนี้
          <br />
          <span className="font-medium">จริง</span> หรือ <span className="font-medium">เท็จ</span>
        </p>
        <div className="flex justify-center py-4 space-x-6 sm:py-8">
          <CheckLight className="w-20 h-20" />
          <CrossLight className="w-20 h-20" />
        </div>
      </div>
      <div className="flex justify-center flex-shrink-0 h-16 pt-4">
        <button
          type="button"
          onClick={() => navigate('/quiz/1')}
          className="inline-flex items-center px-6 py-2 text-lg font-medium border rounded-md bg-[#e7e7f9] text-[#6866e7] shadow-dark hover:shadow-lg hover:bg-white focus:outline-none"
        >
          ทดลองเล่น
        </button>
      </div>
    </section>
  )
}

export default QuizLanding
