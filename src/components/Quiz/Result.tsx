import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star } from '../Icons'

interface Props {
  bgColor?: string
}

const QuizResult: FC<Props> = ({ bgColor }): JSX.Element => {
  const navigate = useNavigate()
  const [score, _] = useState<number>(0)

  return (
    <section className={`${bgColor} flex flex-col justify-between h-full px-8 py-12`}>
      <div className="relative flex items-center justify-center font-light text-center text-white">
        <div className="absolute flex flex-col space-y-2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-2xl">คุณตอบถูก</h1>
          <p className="text-4xl tracking-tighter ">
            {score} <span className="text-2xl">จาก</span> 3
          </p>
        </div>
        <Star className="w-full px-12 md:w-1/3" />
      </div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-light leading-relaxed text-center text-white">
          ไม่เป็นไรนะ!
          <br /> ตอนนี้คุณเข้าใจภาวะสมองเสื่อม มากกว่าเดิมแล้ว
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex justify-center px-6 py-4 border border-white rounded-md">
          <p className="text-lg font-light leading-relaxed text-center text-white font-pridi">
            2 ใน 3 ของประชากรทั่วโลก
            <br /> ยังมีความเข้าใจผิดเกี่ยวกับ
            <br /> ภาวะสมองเสื่อม
          </p>
        </div>
      </div>
      <div className="flex justify-center h-16 pt-4">
        <button
          type="button"
          onClick={() => navigate('/simulate/1')}
          className="inline-flex items-center px-6 py-2 text-lg font-medium border rounded-md bg-[#e7e7f9] text-[#6866e7] shadow-dark hover:shadow-lg hover:bg-white focus:outline-none"
        >
          หน้าถัดไป
        </button>
      </div>
    </section>
  )
}

export default QuizResult
