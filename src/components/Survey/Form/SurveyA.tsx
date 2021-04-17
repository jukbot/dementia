import React, { FC, useState } from 'react'
import { choices } from '../../../data/choice'

const SurveyA: FC = (): JSX.Element => {
  const [answer, setAnswer] = useState<string | undefined>(undefined)

  return (
    <div className="flex flex-col justify-between space-y-8">
      <h1 className="text-xl text-[#444444] font-medium">เลือกการคัดกรองคัดแยกแบบที่ใช่</h1>
      <p className="text-[#4842e0] font-light text-lg">คลิกแต่ละข้อเพื่อดูรายละเอียด</p>
      <fieldset>
        <legend className="sr-only">ตัวเลือกแบบคัดกรองที่จะทำ</legend>
        <ul className="space-y-4">
          {choices.map((choice) => {
            return (
              <li
                key={choice.id}
                className={`${
                  answer === choice.value ? 'bg-[#6866e7] shadow-lg' : 'bg-white shadow-dark'
                } relative block px-4 py-4 rounded-md cursor-pointer transition`}
                tabIndex={0}
                role="radio"
                aria-checked={answer === choice.value}
                onClick={() => setAnswer(choice.value)}
              >
                <p
                  className={`${
                    answer === choice.value ? 'text-white' : 'text-[#6866e7]'
                  } transition font-light text-lg text-center}`}
                >
                  {choice.name}
                </p>
                {/* </div> */}
              </li>
            )
          })}

          {/* <label
            className={`${
              answer === 'B' ? 'bg-[#6866e7] shadow-lg' : 'bg-white shadow-dark'
            } relative block px-4 py-4 rounded-md cursor-pointer transition`}
            tabIndex={1}
            aria-checked={answer === 'B'}
            onClick={() => setAnswer('B')}
          >
            <div className="flex items-center justify-center">
              <p
                className={`${
                  answer === 'B' ? 'text-white' : 'text-[#6866e7]'
                } transition font-light text-lg text-center}`}
              >
                นัดหมายแพทย์เฉพาะทางเพื่อวินิจฉัย
                <br /> โดยละเอียด เช่น สแกนสมอง ตรวจเลือด
                <br /> เพื่อยืนยันภาวะทางสมองอีกครั้ง
              </p>
            </div>
          </label> */}
        </ul>
      </fieldset>
    </div>
  )
}

export default SurveyA
