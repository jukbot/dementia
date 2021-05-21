import React from 'react'
import { Elderly } from '../../Icons'

const Expense = (): JSX.Element => {
  return (
    <div className="flex flex-col space-y-4 text-center text-white sm:space-y-8">
      <p className="text-lg font-light font-pridi">
        การดูแลผู้ป่วยภาวะสมองเสื่อม 1 คน
        <br /> อย่างทั่วถึงและมีคุณภาพ
        <br /> ต้องใช้ผู้ดูแลอย่างน้อย 2 คน
      </p>
      <Elderly className="w-full py-4 mx-auto max-w-3/4" />
      <p className="text-lg font-light font-pridi">นำมาสู่ปัญหาค่าใช้จ่ายในการดูแล ที่อาจสูงถึง</p>
      <p className="text-3xl font-normal lg:text-4xl">50,000 &#3647; ต่อเดือน</p>
    </div>
  )
}

export default Expense
