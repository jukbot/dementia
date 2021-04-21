import React, { FC } from 'react'
import { Cross, Check } from '../Icons'
interface Props {
  className?: string
  setAnswer: (answer: boolean) => void
}

const FooterQuiz: FC<Props> = ({ className, setAnswer = () => {} }): JSX.Element => {
  return (
    <nav className={`bottom-0 flex justify-center w-full mb-12 space-x-6 mt-auto ${className}`}>
      <Check
        onClick={() => setAnswer(true)}
        className="w-24 h-24 rounded-full shadow-dark bg-[#C9C8F3] cursor-pointer"
      />
      <Cross
        onClick={() => setAnswer(false)}
        className="w-24 h-24 rounded-full shadow-dark bg-[#C9C8F3] cursor-pointer"
      />
    </nav>
  )
}

export default FooterQuiz
