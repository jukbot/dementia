import React, { FC, useState } from 'react'
import { Brain } from '../../Icons'

const HumanBrain: FC = (): JSX.Element => {
  const [section, setSection] = useState<string | null>('การฟัง')
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-8">
      <p className="text-lg font-light text-white font-pridi">
        ภาวะสมองเสื่อม คือ ภาวะที่การทำงานของสมองเริ่มถดถอยลง อาจเกิดจากความผิดปกติ เช่น หลอดเลือดที่ไปเลี้ยงสมองตีบ
        หรือความผิดปกติของเซลล์สมอง
      </p>
      <div className="relative flex flex-col items-center">
        <h3 className="text-base font-medium text-center text-white sm:text-lg">
          กดที่จุดสีชมพู<br/>เพื่อดูการทำงานของสมองแต่ละส่วน
        </h3>
        <div className="h-16 mt-4 lg:mt-8">
          <label
            className={`${
              section ? 'opacity-100' : ' opacity-0'
            } block p-2 bg-white text-[#9e473c] transition font-medium text-lg px-8 rounded-md py-2`}
          >
            {section}
          </label>
        </div>
        <Brain className="w-full px-12 md:w-[400px] md:h-[300px]" setSection={(section) => setSection(section)} />
      </div>
      <p className="text-lg font-light text-white font-pridi">
        อาการในแต่ละคนอาจแตกต่างกันไป ขึ้นอยู่กับระดับความรุนแรง และส่วนของสมองที่ได้รับผลกระทบ
      </p>
    </div>
  )
}

export default HumanBrain
