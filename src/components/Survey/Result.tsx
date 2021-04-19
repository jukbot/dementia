import React, { FC, useState } from 'react'
import { choices } from '../../data/choice'
import { useLocalStorage } from '../../utils/useLocalStorage'
import FooterNav from '../Global/FooterNav'

interface Props {
  bgColor?: string
}

const SurveyResult: FC<Props> = ({ bgColor }): JSX.Element => {
  const [code] = useLocalStorage<string | null>('code', 'ก')
  const [count, setCount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  return (
    <section className={`h-full flex flex-col fixed w-full ${bgColor}`}>
      <div className="flex flex-col justify-between h-full px-6 py-6 space-y-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[#a7a5f0] font-medium text-2xl text-center">
            คุณเป็น 1 ใน {count} คน
            <br /> ที่เลือกการคัดกรองคัดแยก
          </h1>
          <div className="flex justify-center">
            <span className="inline-flex items-center px-4 py-0.5 rounded-full text-lg font-light bg-[#6866e7] text-white">
              แบบ {code}
            </span>
          </div>
        </div>
        <div>
          <ul className="space-y-2">
            {choices.map((choice) => {
              return (
                <li key={choice.id} className="space-y-1">
                  <h3 className={`${choice.code === code ? 'text-white' : 'text-[#a7a5f0]'} text-lg font-light`}>
                    {choice.title}
                  </h3>
                  <div className="flex items-center">
                    <img
                      src={choice.thumbnail_url}
                      alt={choice.title}
                      className={`${
                        choice.code === code ? 'opacity-100' : 'opacity-60 filter brightness-75'
                      } object-contain w-12 h-12 bg-white rounded-md`}
                    />
                    <div className={`${choice.code === code ? 'bg-[#a7a5f0]' : 'bg-[#6866e7]'} w-40 h-4`} />
                    <span
                      className={`${choice.code === code ? 'text-white' : 'text-[#a7a5f0] '} text-lg font-light ml-2`}
                    >
                      136
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="text-2xl font-medium text-center text-white">จากทั้งหมด {total} คน</p>
      </div>
      <FooterNav prev={null} next={'/survey/b'} lightTheme={true} className={'mt-auto'} />
    </section>
  )
}

export default SurveyResult
