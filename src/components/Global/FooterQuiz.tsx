import React, { FC } from 'react'
interface Props {
  className?: string
  setAnswer: (answer: boolean) => void
}

const FooterQuiz: FC<Props> = ({ className, setAnswer = () => {} }): JSX.Element => {
  return (
    <nav className={`bottom-0 flex justify-center w-full mb-12 space-x-6 mt-auto ${className}`}>
      <div
        onClick={() => setAnswer(true)}
        className="w-24 h-24 rounded-full shadow-dark bg-[#C9C8F3] text-[#4842E0] cursor-pointer flex items-center justify-center text-3xl"
      >
        จริง
      </div>
      <div
        onClick={() => setAnswer(false)}
        className="w-24 h-24 rounded-full shadow-dark bg-[#F1CACB] text-[#9E1E00] cursor-pointer flex items-center justify-center text-3xl"
      >
        เท็จ
      </div>
    </nav>
  )
}

export default FooterQuiz
