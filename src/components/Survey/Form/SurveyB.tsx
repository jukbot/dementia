import React, { FC, memo, useEffect } from 'react'
import { useLocalStorage } from '../../../utils/useLocalStorage'

interface Props {
  setValidAnswer: (valid: boolean) => void
}

const SurveyB: FC<Props> = ({ setValidAnswer = () => {} }): JSX.Element => {
  const [answer, setAnswer] = useLocalStorage<string | null>('surveyB', null)

  useEffect(() => {
    if (answer) {
      console.log('true')
      setValidAnswer(true)
    } else {
      console.log('false')
      setValidAnswer(false)
    }
  }, [answer])

  return (
    <div className="flex flex-col justify-between space-y-8">
      <h1 className="text-2xl text-[#444444] leading-normal font-light text-center">
        หากเข้ารับบริการ
        <br /> ตรวจคัดกรองคัดแยกแล้วพบว่า
        <br /> คุณหรือผู้สูงอายุในครอบครัว
        <br /> มีภาวะความทรงจำบกพร่อง (MCI)
        <br />
        <br /> คุณจะ
      </h1>
      <p className="text-[#4842e0] font-light text-lg text-center">คลิกเพื่อเลือกสิ่งที่คุณจะทำต่อ</p>
      <fieldset>
        <legend className="sr-only">ตัวเลือกสิ่งที่จะทำต่อ</legend>
        <div className="space-y-4 text-center">
          <label
            className={`${
              answer === 'a' ? 'bg-[#6866e7] shadow-lg' : 'bg-white shadow-dark'
            } relative block px-4 py-4 rounded-md cursor-pointer transition`}
            tabIndex={0}
            role="radio"
            aria-checked={answer === 'a'}
            onClick={() => setAnswer('a')}
          >
            <div className="flex items-center justify-center">
              <p
                className={`${
                  answer === 'a' ? 'text-white' : 'text-[#6866e7]'
                } transition font-light text-lg text-center}`}
              >
                ปรับเปลี่ยนพฤติกรรมด้วยตนเอง
                <br /> เพื่อชะลอความเสื่อมของสมอง
                <br /> สังเกตอาการและตรวจเช็คอย่างสม่ำเสมอ
              </p>
            </div>
          </label>
          <label
            className={`${
              answer === 'b' ? 'bg-[#6866e7] shadow-lg' : 'bg-white shadow-dark'
            } relative block px-4 py-4 rounded-md cursor-pointer transition`}
            tabIndex={1}
            aria-checked={answer === 'b'}
            onClick={() => setAnswer('b')}
          >
            <div className="flex items-center justify-center">
              <p
                className={`${
                  answer === 'b' ? 'text-white' : 'text-[#6866e7]'
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

export default memo(SurveyB)
