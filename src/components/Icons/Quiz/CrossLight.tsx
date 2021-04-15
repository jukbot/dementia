import React, { FC } from 'react'

interface Props {
  className?: string
}

const CrossLight: FC<Props> = (props) => {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
      <circle cx={12.5} cy={12.5} r={12.5} fill="#c9c8f3" />
      <path d="M18.75 7.51l-1.26-1.26-5 5-5-5-1.24 1.26 5 5-5 5 1.26 1.26 5-5 5 5 1.26-1.26-5-5z" fill="#6866e7" />
    </svg>
  )
}

export default CrossLight
