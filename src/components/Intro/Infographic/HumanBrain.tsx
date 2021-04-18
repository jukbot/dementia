import React, { FC } from 'react'
import { Brain } from '../../Icons'

const HumanBrain: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p className="text-lg font-light leading-relaxed text-white font-pridi">
        ภาวะสมองเสื่อม คือภาวะที่การทำงานของสมอง เริ่มถดถอยลง อาจเกิดจากความผิดปกติ เช่น หลอดเลือดที่ไปเลี้ยงสมองตีบ
        หรือความผิดปกติ ของเซลล์สมอง
      </p>
      <h3 className="text-lg font-medium text-center text-white">คลิกเพื่อดูการทำงานของสมองแต่ละส่วน</h3>
      <div className="relative flex flex-col items-center">
        <Brain className="w-full px-12 py-4 max-w-2/3 lg:max-w-1/2" />
        <div className="absolute h-12 border-l-4 border-white border-dotted bottom-10" />
        <div></div>
      </div>
      <p className="text-lg font-light leading-relaxed text-white font-pridi">
        อาการในแต่ละคนอาจแตกต่างกันไป ขึ้นอยู่กับ ระดับความรุนแรง และส่วนของสมองที่ได้รับ ผลกระทบ
      </p>
    </div>
  )
}

export default HumanBrain
