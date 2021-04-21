import React, { FC, memo, useState } from 'react'
import { choices } from '../../../data/choice'
import { RadioGroup } from '@headlessui/react'
import { useLocalStorage } from '../../../utils/useLocalStorage'

interface Props {
  setValidAnswer: (valid: boolean) => void
}

const SurveyA: FC<Props> = ({ setValidAnswer = () => {} }): JSX.Element => {
  const [openChoice, setOpenChoice] = useState<number | string | null>(null)
  const [selectedChoice, setChoice] = useLocalStorage<number | null>('selectedChoice', null)

  const selectChoice = (index: number) => {
    setChoice(index)
    setOpenChoice(null)
    if (choices[index]) {
      window.localStorage.setItem('surveyA', choices[index]?.value)
      window.localStorage.setItem('code', choices[index]?.code)
      window.localStorage.setItem('choice-column', choices[index]?.column)
      window.sessionStorage.removeItem('survey-summary')
      setValidAnswer(true)
    } else {
      setValidAnswer(false)
    }
  }

  return (
    <div className="relative flex flex-col justify-between w-full space-y-2 lg:justify-evenly">
      <h1 className="text-xl text-[#444444] font-medium text-center">เลือกการคัดกรองคัดแยกแบบทีใช่</h1>
      <p className={`${openChoice !== null ? 'hidden' : ''} text-[#4842e0] font-light text-lg text-center`}>
        คลิกแต่ละข้อเพื่อดูรายละเอียด
      </p>
      <RadioGroup value={openChoice ?? selectedChoice} onChange={setOpenChoice}>
        <RadioGroup.Label className="sr-only">เลือกแบบคัดกรองสำหรับคุณ</RadioGroup.Label>
        <div
          className={`${openChoice !== null ? 'hidden' : ''} flex flex-col h-full space-y-3 mb-20 w-full items-center`}
        >
          {choices.map((choice) => (
            <RadioGroup.Option
              key={choice.id}
              value={choice.index}
              className={({ checked }) => `
                  ${checked ? 'bg-[#6866e7] text-white' : 'bg-white shadow-dark text-[#999999]'}
                    relative rounded-md cursor-pointer focus:outline-none transition w-full sm:max-w-[500px] overflow-hidden`}
            >
              {({ checked }) => (
                <div className="flex items-center">
                  <div
                    className={`${
                      checked ? 'bg-white' : 'bg-[#a7a5f0]'
                    } overflow-hidden w-20 h-20 md:w-28 md:h-28 flex-none transition`}
                  >
                    <img
                      src={choice.thumbnail_url}
                      alt={choice.title}
                      className={`${checked ? 'opacity-100' : 'opacity-40'} object-cover w-full h-full transition`}
                    />
                  </div>
                  <div className="flex flex-col flex-auto w-full px-4 py-2 space-y-2">
                    <span
                      className={`${
                        checked ? 'bg-white text-[#6866e7]' : 'bg-[#6866e7] text-white'
                      } flex px-4 py-0.5 rounded-full w-20 justify-center text-sm font-light transition`}
                    >
                      แบบ {choice.code}
                    </span>
                    <RadioGroup.Label
                      as="p"
                      className="text-base font-light leading-4 max-w-prose sm:text-lg"
                      dangerouslySetInnerHTML={{ __html: choice.title ?? '' }}
                    />
                  </div>

                  <div
                    className={`${checked ? 'bg-[#4842e0]' : ''}
                      h-6 w-6 cursor-pointer rounded-full flex bg-[#e7e7f9] items-center justify-center flex-shrink-0 mr-4 right-0
                    `}
                    aria-hidden="true"
                  >
                    <span className={`${checked ? 'bg-[#4842e0]' : ''} rounded-full w-3 h-3 transition`} />
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {openChoice !== null ? (
        <div className="absolute top-0 z-10 flex justify-center w-full h-full">
          <div
            role="dialog"
            className="absolute top-0 flex flex-col w-full h-full p-6 m-0 space-y-4 overflow-auto bg-white rounded-md shadow-dark sm:max-w-[500px]"
          >
            <div className="flex justify-center w-full">
              <span className="top-0 bg-[#6866e7] text-white flex px-4 py-0.5 rounded-full w-20 justify-center text-sm font-light transition">
                แบบ {choices[Number(openChoice)]?.code ?? ''}
              </span>
            </div>
            <h2
              className="top-0 text-xl font-light text-center text-[#6866e7]"
              dangerouslySetInnerHTML={{ __html: choices[Number(openChoice)]?.title ?? '' }}
            />
            <div className="absolute top-0 right-0 pr-4 opacity-75">
              <div
                className="flex justify-center items-center text-[#6866e7] bg-[#c9c8f3] rounded-full p-1 cursor-pointer"
                onClick={() => setOpenChoice(null)}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="px-8">
              <img
                src={choices[Number(openChoice)]?.image_url ?? ''}
                alt={choices[Number(openChoice)]?.title ?? ''}
                className="object-contain w-full h-auto max-h-[400px]"
              />
            </div>
            <p className="text-lg font-light text-[#666666] font-pridi w-full h-full">
              {choices[Number(openChoice)]?.content}
            </p>
            <div className="bottom-0 flex justify-center w-full pt-4 mt-auto space-x-2 lg:space-x-4">
              <button
                onClick={() => setOpenChoice(choices[Number(openChoice)].prev ?? -1)}
                disabled={choices[Number(openChoice)].prev === null}
                className={`${
                  choices[Number(openChoice)].prev === null
                    ? 'border-[#e7e7f9] text-[#e7e7f9] pointer-events-none'
                    : 'border-[#a7a5f0] text-[#a7a5f0]'
                } border-[#a7a5f0] text-[#a7a5f0] focus:outline-none inline-flex items-center justify-center w-full px-2 py-2 text-lg font-medium border rounded-md`}
              >
                ย้อนกลับ
              </button>
              <button
                onClick={() => selectChoice(choices[Number(openChoice)].index)}
                className={`bg-[#6866e7] text-white hover:text-white focus:outline-none inline-flex items-center justify-center w-full px-2 py-2 text-lg font-medium border rounded-md`}
              >
                เลือก
              </button>
              <button
                onClick={() => setOpenChoice(choices[Number(openChoice)].next ?? 0)}
                disabled={choices[Number(openChoice)].next === null}
                className={`${
                  choices[Number(openChoice)].next === null
                    ? 'border-[#e7e7f9] text-[#e7e7f9] pointer-events-none'
                    : 'border-[#a7a5f0] text-[#a7a5f0]'
                } focus:outline-none inline-flex items-center justify-center w-full px-2 py-2 text-lg font-medium border rounded-md`}
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default memo(SurveyA)
