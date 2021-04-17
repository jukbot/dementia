import React, { FC } from 'react'

interface Props {
  onClick?: () => void
  className?: string
}

const Check: FC<Props> = (props) => {
  return (
    <svg viewBox="0 0 90 93" fill="none" {...props}>
      <path d="M45 93c24.853 0 45-20.819 45-46.5S69.853 0 45 0 0 20.819 0 46.5 20.147 93 45 93z" fill="#C9C8F3" />
      <path
        d="M37.697 55.63l-9.504-9.82-3.24 3.315 12.744 13.17 27.35-28.284-3.21-3.326-24.14 24.945z"
        fill="#4842E0"
      />
    </svg>
  )
}

export default Check
