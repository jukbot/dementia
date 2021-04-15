import React, { FC } from 'react'

interface Props {
  className?: string
}

const CheckLight: FC<Props> = (props) => {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 87.5" {...props}>
      <circle cx={43.75} cy={43.75} r={43.75} fill="#c9c8f3" />
      <path d="M36.65 52.34l-9.24-9.24-3.15 3.12 12.39 12.39L63.24 32l-3.12-3.13z" fill="#4842e0" />
    </svg>
  )
}

export default CheckLight
