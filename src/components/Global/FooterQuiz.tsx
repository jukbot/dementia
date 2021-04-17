import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cross, Check } from '../Icons'

interface Props {
  className?: string
  prev: string
  next: string
}

const FooterQuiz: FC<Props> = ({ prev = '/', next = '/', className }): JSX.Element => {
  const navigate = useNavigate()

  return (
    <nav className={`bottom-0 flex justify-center w-full mb-12 space-x-6 mt-auto ${className}`}>
      <Check onClick={() => navigate(prev)} className="w-24 h-24 rounded-full shadow-dark bg-[#C9C8F3]" />
      <Cross onClick={() => navigate(next)} className="w-24 h-24 rounded-full shadow-dark bg-[#C9C8F3]" />
    </nav>
  )
}

export default FooterQuiz
