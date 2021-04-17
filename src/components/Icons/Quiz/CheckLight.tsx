import React, { FC } from 'react'

interface Props {
  className?: string
}

const CheckLight: FC<Props> = (props) => {
  return (
    <svg viewBox="0 0 70 70" fill="none" {...props}>
      <path
        d="M35.005 70.01c19.333 0 35.005-15.672 35.005-35.005C70.01 15.672 54.338 0 35.005 0 15.672 0 0 15.672 0 35.005 0 54.338 15.672 70.01 35.005 70.01z"
        fill="#6866E7"
      />
      <path
        d="M28.117 43.326l-8.964-8.953-3.054 3.024 12.018 12.017L53.91 23.62l-3.034-3.034-22.76 22.74z"
        fill="#4842E0"
      />
    </svg>
  )
}

export default CheckLight
