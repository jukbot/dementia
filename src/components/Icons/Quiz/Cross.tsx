import React, { FC } from 'react'

interface Props {
  onClick?: () => void
  className?: string
}

const Cross: FC<Props> = (props) => {
  return (
    <svg viewBox="0 0 90 90" fill="none" {...props}>
      <path d="M45 90c24.853 0 45-20.147 45-45S69.853 0 45 0 0 20.147 0 45s20.147 45 45 45z" fill="#F1CBCB" />
      <path
        d="M60.953 32.256l-3.209-3.21L45 41.792 32.256 29.047l-3.21 3.209L41.792 45 29.047 57.744l3.209 3.21L45 48.208l12.744 12.744 3.21-3.209L48.208 45l12.744-12.744z"
        fill="#9E1D01"
      />
    </svg>
  )
}

export default Cross
