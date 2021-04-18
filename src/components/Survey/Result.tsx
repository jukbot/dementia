import React, { FC, useState } from 'react'

import FooterNav from '../Global/FooterNav'

interface Props {
  bgColor?: string
}

const SurveyResult: FC<Props> = ({ bgColor }): JSX.Element => {
  const [count, setCount] = useState<number>(0)
  return (
    <section className={`h-full flex flex-col fixed w-full ${bgColor}`}>
      <div className="flex flex-col justify-between h-full px-8 py-8 space-y-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[#a7a5f0] font-medium text-2xl text-center">
            คุณเป็น 1 ใน {count} คน
            <br /> ที่เลือกการคัดกรองคัดแยก
          </h1>
          <div className="flex justify-center">
            <span className="inline-flex items-center px-4 py-0.5 rounded-full text-lg font-light bg-[#6866e7] text-white">
              แบบ ก
            </span>
          </div>
        </div>
        <div className="h-full bg-[#6866e7]">chart here</div>
        <p className="text-2xl font-medium text-center text-white">จากทั้งหมด 0 คน</p>
      </div>
      <FooterNav prev={null} next={'/survey/b'} lightTheme={true} className={'mt-auto'} />
    </section>
  )
}

export default SurveyResult
