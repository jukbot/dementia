import React, { FC } from 'react'
import { Elderly } from '../../Icons'

const Expense: FC = () => {
  return (
    <div className="flex flex-col space-y-8 text-center text-white">
      <p className="text-lg font-light font-pridi">
        การดูแลผู้ป่วยภาวะสมองเสื่อม 1 คน
        <br /> อย่างทั่วถึง และ มีคุณภาพ
        <br /> ต้องใช้ผู้ดูแลอย่างน้อย 2 คน
      </p>
      <Elderly className="w-full px-12 py-4 mx-auto" />
      <p className="text-lg font-light font-pridi">นำมาสู่ปัญหาค่าใช้จ่ายในการดูแล ที่อาจสูงถึง</p>
      <p className="text-3xl font-normal">50,000 &#3647; / เดือน</p>
    </div>
  )
}

export default Expense
