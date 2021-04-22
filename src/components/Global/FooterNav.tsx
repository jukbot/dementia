import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  className?: string
  lightTheme: boolean
  prev: string | null | undefined
  next: string | null | undefined
}
const FooterNav: FC<Props> = ({ lightTheme = true, prev, next, className }): JSX.Element => {
  const navigate = useNavigate()

  return (
    <nav className={`bottom-0 flex justify-center w-full space-x-4 mb-8 ${className}`}>
      {prev ? (
        <button
          type="button"
          onClick={() => navigate(prev ?? '/')}
          className={`${
            lightTheme
              ? 'text-[#A7A5F0] bg-transparent border-[#A7A5F0] hover:border-white hover:text-white'
              : 'text-[#A7A5F0] bg-white border-[#A7A5F0] hover:bg-[#A7A5F0] hover:border-[#A7A5F0] hover:text-white'
          } inline-flex items-center px-6 py-2 text-lg font-medium border rounded-md focus:outline-none`}
        >
          ย้อนกลับ
        </button>
      ) : (
        ''
      )}
      {next ? (
        <button
          type="button"
          onClick={() => navigate(next ?? '/')}
          className={`${
            lightTheme
              ? 'text-[#6866E7] bg-white border-white hover:bg-transparent hover:text-white'
              : 'text-white bg-[#6866E7] border-[#6866E7] hover:bg-[#A7A5F0] hover:border-[#A7A5F0]'
          } inline-flex items-center px-6 py-2 text-lg font-medium border shadow-md rounded-md focus:outline-none`}
        >
          หน้าถัดไป
        </button>
      ) : (
        ''
      )}
    </nav>
  )
}

export default FooterNav
