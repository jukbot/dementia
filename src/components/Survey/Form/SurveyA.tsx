import React, { FC, useState } from 'react'
import { choices } from '../../../data/choice'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'

const SurveyA: FC = (): JSX.Element => {
  const [answer, setAnswer] = useState<string | null>(null)

  return (
    <div className="flex flex-col justify-between space-y-8">
      <h1 className="text-xl text-[#444444] font-medium">เลือกการคัดกรองคัดแยกแบบที่ใช่</h1>
      <p className="text-[#4842e0] font-light text-lg">คลิกแต่ละข้อเพื่อดูรายละเอียด</p>
      <RadioGroup value={answer} onChange={setAnswer}>
        <RadioGroup.Label className="sr-only">เลือกแบบคัดกรองสำหรับคุณ</RadioGroup.Label>
        <div className="space-y-4">
          {choices.map((choice) => (
            <RadioGroup.Option
              key={choice.id}
              value={choice.value}
              className={({ checked }) => `
                  ${checked ? 'bg-[#6866e7] shadow-lg text-white' : 'bg-white shadow-dark text-[#999999]'}
                    relative rounded-md shadow-dark cursor-pointer flex focus:outline-none transition`}
            >
              {({ checked }) => (
                <>
                  <span
                    className={`${checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300'}
                      h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center
                    `}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-4 py-0.5 rounded-full text-sm font-light bg-[#a7a5f0] text-white">
                        แบบ ก
                      </span>
                      <RadioGroup.Label as="p" className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}>
                        {choice.title}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className={`inline ${checked ? 'text-light-blue-100' : 'text-gray-500'}`}
                      >
                        <span aria-hidden="true">&middot;</span> <span>{choice.text}</span>
                      </RadioGroup.Description>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-white">
                        <CheckIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default SurveyA
