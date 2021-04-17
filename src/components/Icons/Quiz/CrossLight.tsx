import React, { FC } from 'react'

interface Props {
  className?: string
}

const CrossLight: FC<Props> = (props) => {
  return (
    <svg viewBox="0 0 70 70" fill="none" {...props}>
      <path
        d="M35.005 70.01c19.333 0 35.005-15.672 35.005-35.005C70.01 15.672 54.338 0 35.005 0 15.672 0 0 15.672 0 35.005 0 54.338 15.672 70.01 35.005 70.01z"
        fill="#6866E7"
      />
      <path
        d="M49.414 23.491l-2.905-2.905-11.504 11.513-11.514-11.513-2.905 2.905 11.513 11.514-11.513 11.504 2.905 2.905 11.514-11.513 11.504 11.513 2.905-2.905-11.513-11.504 11.513-11.514z"
        fill="#4842E0"
      />
    </svg>
  )
}

export default CrossLight
