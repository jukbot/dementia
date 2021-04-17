import React, { FC } from 'react'

interface Props {
  className?: string
}

const Brain: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <svg viewBox="0 0 375 667" height="100%" width="100%" {...props}>
        <defs>
          <style>
            {
              '.cls-3,.cls-4{fill:none}.cls-3{stroke:#8382ec;stroke-miterlimit:10;stroke-width:2px}.cls-2{fill:#8382ec}.cls-3,.cls-4{stroke-linecap:round}.cls-4{stroke:#fff;stroke-linejoin:round;stroke-width:4px}'
            }
          </style>
        </defs>
        <path
          d="M129.17 450l-11.9-21.52-28.91 1.34a11 11 0 01-11.42-12l2.57-27.09-14.94-3a3.17 3.17 0 01-2.2-4.58l16-30.81C66.69 278.57 130 224 203.64 231c88.79 8.44 116.09 95 73 181.32l15 37.64"
          stroke="#8382ec"
          strokeMiterlimit={10}
          strokeWidth="2px"
          fill="none"
        />
        <ellipse className="cls-2" cx={90.28} cy={357.74} rx={2.55} ry={6.33} />
        <path className="cls-3" d="M75.45 402.55s9.59 4 25.23-1.51" />
        <path className="cls-3" d="M98.31 359.85L102.38 360.3" />
        <path className="cls-3" d="M98.31 356.76L102.46 356.2" />
        <path
          className="cls-2"
          d="M273.89 321.26c-1.62 30.14-26.06 39.93-85.53 39.93s-87.29-9.25-87.29-39.93c0-40.26 39.08-72.89 87.29-72.89 53.64 0 87.7 32.7 85.53 72.89z"
        />
        <path className="cls-2" d="M195.11 350.22l21.78 29.18a2.43 2.43 0 004.38-1.45v-27.73z" />
        <path className="cls-4" d="M183.33 412.5L183.33 412.5" />
        <path
          strokeDasharray="0 8.33"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="4px"
          strokeLinecap="round"
          fill="none"
          d="M183.33 404.17L183.33 375"
        />
        <path className="cls-4" d="M183.33 370.83L183.33 370.83" />
      </svg>
    </>
  )
}

export default Brain
