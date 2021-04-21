import React, { FC, useState } from 'react'
import { Brain } from '../../Icons'

const HumanBrain: FC = (): JSX.Element => {
  const [section, setSection] = useState<string | null>(null)
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p className="text-lg font-light text-white font-pridi">
        ภาวะสมองเสื่อม คือภาวะที่การทำงานของสมอง เริ่มถดถอยลง อาจเกิดจากความผิดปกติ เช่น หลอดเลือดที่ไปเลี้ยงสมองตีบ
        หรือความผิดปกติ ของเซลล์สมอง
      </p>
      <div className="relative flex flex-col items-center">
        <h3 className="text-base font-medium text-center text-white md:text-lg">คลิกเพื่อดูการทำงานของสมองแต่ละส่วน</h3>
        <Brain
          className="w-full px-12 md:my-6 md:w-[400px] md:h-[300px]"
          setSection={(section) => setSection(section)}
        />
        <div
          className={`${
            section ? 'opacity-100' : 'opacity-0'
          } absolute h-[70px] border-l-4 border-white transition border-dotted bottom-14`}
        />
        <label
          className={`${
            section ? 'opacity-100' : ' opacity-0'
          } block p-2 bg-white text-[#9e473c] transition font-medium text-lg px-8 rounded-md py-2 `}
        >
          {section}
        </label>
      </div>
      <p className="text-lg font-light text-white font-pridi">
        อาการในแต่ละคนอาจแตกต่างกันไป ขึ้นอยู่กับ ระดับความรุนแรง และส่วนของสมองที่ได้รับ ผลกระทบ
      </p>
    </div>
  )
}

export default HumanBrain
