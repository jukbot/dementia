import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { content } from '../../data/quiz'
import { useLocalStorage } from '../../utils/useLocalStorage'
import FooterQuiz from '../Global/FooterQuiz'
import { CheckOutline, CrossOutline } from '../Icons'
import { Map } from '../../../@types'
import { updateData } from '../../utils/sheety'
interface Props {
  bgColor?: string
}

const QuizContent: FC<Props> = ({ bgColor }): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)
  const [score, setScore] = useLocalStorage<null | Map>('quiz-score', { quiz1: 0, quiz2: 0, quiz3: 0 })
  const [answer, setAnswer] = useState<boolean | null>(null)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (data?.index === 0) {
      window.localStorage.removeItem('quiz-score')
    }
  }, [])

  const checkAnswer = (answer: boolean) => {
    setAnswer(answer)
    if (answer === data?.answerChoice) {
      setScore({ ...score, [data?.column]: 1 })
    } else {
      setScore({ ...score, [data?.column ?? '']: 0 })
    }
    setShowAnswer(true)
  }

  const saveForm = async (): Promise<void> => {
    const id = window.localStorage.getItem('dementia-uid')
    const answer = window.localStorage.getItem('quiz-score')
    try {
      if (id && answer) {
        const payload = JSON.parse(answer)
        // @ts-ignore
        const quizScore: number = Object.values(payload).reduce((a, b) => a + b)
        await updateData({ ...payload, quizScore }, 'survey', id ?? '1')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const goToNextQuestion = (): void => {
    if (data?.next) {
      setShowAnswer(false)
      navigate(data?.next)
    } else {
      setShowAnswer(false)
      saveForm()
      navigate('/quiz/result')
    }
  }

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <section className={`${bgColor} flex flex-col h-full sm:py-12 sm:max-w-[500px] self-center space-y-4 p-6`}>
        <h2 className={`${data?.heading ? 'block' : 'hidden'} text-xl font-medium text-center text-[#999999]`}>
          {data?.heading}
        </h2>
        {data?.question ? (
          <div className="flex items-center justify-center h-full">
            <h1
              className="text-2xl font-light text-center text-[#666666]"
              dangerouslySetInnerHTML={{ __html: data?.question ?? '' }}
            />
          </div>
        ) : (
          ''
        )}
        <div className={showAnswer ? 'hidden' : 'flex justify-center items-center'}>
          <img src={`${data?.image_url}`} className="object-contain w-full h-full" alt={data?.image_alt} />
        </div>
        <div className={`${showAnswer ? 'block' : 'hidden'} flex w-full space-x-4 sm:py-8 items-center justify-center`}>
          <p
            className={`${
              answer ? 'text-[#6866e7] border-[#6866e7]' : 'text-[#9e1d01] border-[#9e1d01]'
            }  border rounded-md flex items-center space-x-2 px-4 py-2 font-medium text-lg`}
          >
            <span>คุณคิดว่าประโยคนี้ :</span>
            {answer ? (
              <span className="flex justify-center items-center text-[#4842e0] bg-[#c9c8f3] rounded-full p-1">
                <CheckOutline className="w-6 h-6" />
              </span>
            ) : (
              <span className="flex justify-center items-center text-[#9e1d01] bg-[#f1cbcb] rounded-full p-1">
                <CrossOutline className="w-6 h-6" />
              </span>
            )}
          </p>
        </div>
        <div
          className={`${showAnswer ? 'block' : 'hidden'} flex flex-col items-center space-y-4 w-full h-full px-6 py-4 ${
            data?.answerChoice ? 'bg-[#6866e7]' : 'bg-[#cd786a]'
          } rounded-md mx-auto`}
        >
          <h3 className="text-xl font-medium text-white">เฉลย</h3>
          <span className={`flex justify-center items-center border border-white text-white rounded-full p-1`}>
            {data?.answerChoice ? <CheckOutline className="w-14 h-14" /> : <CrossOutline className="w-14 h-14" />}
          </span>
          <p className="h-full text-lg font-light text-white font-pridi">{data?.answer}</p>
          <div className="bottom-0 flex justify-center mt-auto space-x-4 sm:py-4">
            <button
              onClick={() => goToNextQuestion()}
              className={`${
                data?.next
                  ? data?.answerChoice
                    ? 'bg-[#2207b4] text-[#e7e7f9]'
                    : 'bg-[#9e1d01] text-[#f1cbcb]'
                  : 'bg-[#e7e7f9] text-[#6866e7]'
              } focus:outline-none shadow-dark inline-flex items-center px-6 py-2 text-lg font-medium rounded-md`}
            >
              {data?.next ? 'ข้อถัดไป' : 'ดูคะแนน'}
            </button>
          </div>
        </div>
      </section>
      <FooterQuiz setAnswer={(ans) => checkAnswer(ans)} className={`${showAnswer ? 'hidden' : 'flex'} mt-auto`} />
    </div>
  )
}

export default QuizContent
