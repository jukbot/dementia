import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star } from '../Icons'
import { content } from '../../data/quiz'
interface Props {
  bgColor?: string
}

const message = [
  {
    score: 0,
    text: 'ไม่เป็นไรนะ!<br/>ตอนนี้คุณเข้าใจภาวะสมองเสื่อม<br/>มากกว่าเดิมแล้ว',
  },
  {
    score: 1,
    text: 'ไม่เป็นไรนะ!<br/>ตอนนี้คุณเข้าใจภาวะสมองเสื่อม<br/>มากกว่าเดิมแล้ว',
  },
  {
    score: 2,
    text: 'เก่งมาก!<br/>คุณมีความเข้าใจพื้นฐานเรื่อง<br/>ภาวะสมองเสื่อมใช้ได้เลย',
  },
  {
    score: 3,
    text: 'สุดยอด!<br/>คุณมีความเข้าใจพื้นฐานเรื่อง<br/>ภาวะสมองเสื่อมดีทีเดียว',
  },
]

const maxScore: number = content.length

const QuizResult: FC<Props> = ({ bgColor }): JSX.Element => {
  const navigate = useNavigate()
  const [score] = useState(() => {
    const stickyValue = window.localStorage.getItem('quiz-score')
    const rawData = stickyValue !== null ? JSON.parse(stickyValue) : 0
    // @ts-ignore
    const total = Object.values(rawData).reduce((a, b) => a + b)
    return total
  })

  return (
    <section className={`${bgColor} flex flex-col justify-evenly h-full px-8 py-8`}>
      <div className="relative flex items-center justify-center font-light text-center text-white">
        <div className="absolute flex flex-col space-y-2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-2xl">คุณตอบถูก</h1>
          <p className="text-4xl tracking-tighter ">
            {score} <span className="text-2xl">จาก</span> {maxScore}
          </p>
        </div>
        <Star className="w-full px-12 md:w-1/3" />
      </div>
      <div className="flex justify-center">
        <h2
          className="text-2xl font-light leading-relaxed text-center text-white"
          dangerouslySetInnerHTML={{ __html: message[Number(score)].text ?? '' }}
        />
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
          onClick={() => navigate('/simulate/pre')}
          className="bg-[#e7e7f9] text-[#6866e7] inline-flex items-center px-6 py-2 text-lg font-medium border shadow-dark rounded-md focus:outline-none"
        >
          หน้าถัดไป
        </button>
      </div>
    </section>
  )
}

export default QuizResult
