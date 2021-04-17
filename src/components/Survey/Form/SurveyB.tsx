import React, { FC, useState } from 'react'

const SurveyB: FC = () => {
  const [answer, setAnswer] = useState<string | undefined>(undefined)

  return (
    <div className="flex flex-col justify-between space-y-8">
      <h1 className="text-2xl text-[#444444] leading-normal font-light">
        หากเข้ารับบริการ
        <br /> ตรวจคัดกรองคัดแยกแล้วพบว่า
        <br /> คุณหรือผู้สูงอายุในครอบครัว
        <br /> มีภาวะความทรงจำบกพร่อง (MCI)
        <br />
        <br /> คุณจะ
      </h1>
      <p className="text-[#4842e0] font-light text-lg">คลิกเพื่อเลือกสิ่งที่คุณจะทำต่อ</p>
      <fieldset>
        <legend className="sr-only">ตัวเลือกสิ่งที่จะทำต่อ</legend>
        <div className="space-y-4">
          <label
            className={`${
              answer === 'A' ? 'bg-[#6866e7] shadow-lg' : 'bg-white shadow-dark'
            } relative block px-4 py-4 rounded-md cursor-pointer transition`}
            tabIndex={0}
            role="radio"
            aria-checked={answer === 'A'}
            onClick={() => setAnswer('A')}
          >
            <div className="flex items-center justify-center">
              <p
                className={`${
                  answer === 'A' ? 'text-white' : 'text-[#6866e7]'
                } transition font-light text-lg text-center}`}
              >
                ปรับเปลี่ยนพฤติกรรมด้วยตนเอง
                <br /> เพื่อชะลอความเสื่อมของสมอง
                <br /> สังเกตอาการและตรวจเช็คอย่างสม่ำเสมอ
              </p>
            </div>
            {/* <div
              className={`${
                answer === 'A' ? 'border-red-500' : 'border-transparent'
              } absolute inset-0 border-2 rounded-lg group-hover:border-primary pointer-events-none `}
              aria-hidden="true"
            ></div> */}
          </label>
          <label
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
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default SurveyB
