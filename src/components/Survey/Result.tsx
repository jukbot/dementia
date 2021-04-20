import React, { FC, memo, useEffect, useState } from 'react'
import { CountUp } from 'use-count-up'

import { SurveyData } from '../../../@types'
import { choices } from '../../data/choice'
import { getDataById } from '../../utils/sheety'
import FooterNav from '../Global/FooterNav'

interface Props {
  bgColor?: string
}

const SurveyResult: FC<Props> = ({ bgColor }): JSX.Element => {
  const [code] = useState(() => {
    const stickyValue = window.localStorage.getItem('code')
    return stickyValue !== null ? String(stickyValue) : 'ก'
  })

  const [columnName] = useState(() => {
    const stickyValue = window.localStorage.getItem('choiceColumn')
    return stickyValue !== null ? String(stickyValue) : 'choiceA'
  })
  const [data, setData] = useState<SurveyData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataById('summary', '2')
      setData(result?.summary)
      if (result.summary) {
        window.sessionStorage.setItem('survey-summary', JSON.stringify(result?.summary))
      }
    }

    const session = window.sessionStorage.getItem('survey-summary')
    if (session) {
      console.log('get from session')
      setData(JSON.parse(session))
    } else {
      fetchData()
    }
  }, [])

  const getWidthPercent = (value: string): string => {
    const width = Math.ceil((Number(value) * 100) / (Number(data?.totalCount) * 2))
    return String(width) + '%'
  }

  return (
    <section className={`h-full flex flex-col fixed w-full ${bgColor}`}>
      <div className="flex flex-col justify-between h-full px-6 py-6 space-y-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[#a7a5f0] font-medium text-2xl text-center">
            คุณเป็น 1 ใน {<CountUp isCounting end={Number(data?.[columnName])} duration={1} />} คน
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
                    {choice.title.replaceAll('<br/>', '')}
                  </h3>
                  <div className="flex items-center w-full">
                    <img
                      src={choice.thumbnail_url}
                      alt={choice.title}
                      className={`${
                        choice.code === code ? 'opacity-100' : 'opacity-60 filter brightness-75'
                      } object-contain w-12 h-12 bg-white rounded-md z-10`}
                    />
                    <div
                      className={`${
                        choice.code === code ? 'bg-[#a7a5f0]' : 'bg-[#6866e7]'
                      } h-4 left-0 w-0 transform transition-transform	`}
                      style={{ width: getWidthPercent(data?.[choice.column] ?? '') }}
                    />
                    <span
                      className={`${choice.code === code ? 'text-white' : 'text-[#a7a5f0] '} text-lg font-light ml-2`}
                    >
                      {data ? <CountUp isCounting end={Number(data?.[choice.column])} duration={1} /> : 0}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="text-2xl font-medium text-center text-white">
          จากทั้งหมด <CountUp isCounting end={Number(data?.totalCount)} duration={3} /> คน
        </p>
      </div>
      <FooterNav prev={null} next={'/survey/b'} lightTheme={true} className={'mt-auto'} />
    </section>
  )
}

export default memo(SurveyResult)
