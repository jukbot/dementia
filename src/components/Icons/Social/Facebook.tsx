import React, { FC } from 'react'

interface Props {
  className?: string
}
const Facebook: FC<Props> = (props) => {
  return (
    <svg data-name="Layer 1" viewBox="0 0 41.67 41.67" {...props}>
      <path
        d="M34.14 0H7.52A7.52 7.52 0 000 7.52v26.62a7.53 7.53 0 007.52 7.53h26.62a7.53 7.53 0 007.53-7.53V7.52A7.53 7.53 0 0034.14 0zm-.58 12.73h-2.64c-1.86 0-2 .7-2 2v2.63h4.62V22h-4.6v15h-5.79V22h-3.47v-4.64h3.47v-2.79c0-4.06 1.69-6.47 6.47-6.47h3.94z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Facebook
