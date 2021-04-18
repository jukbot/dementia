import React, { FC, useState } from 'react'

interface Props {
  className?: string
  setSection: (section: string) => void
}

const Brain: FC<Props> = ({ className, setSection = () => {} }) => {
  const [selectedId, setId] = useState<string | null>('')
  const selectPoint = (data: { text: string; id: string }) => {
    setSection(data.text)
    setId(data.id)
  }

  return (
    <svg viewBox="0 0 640 640" width={250} height={250} className={`fill-current ${className}`}>
      <defs>
        <path
          d="M184.32 616.91l-32.18-58.19c-46.91 2.18-72.97 3.38-78.18 3.63-16.41.69-30.28-12.05-30.98-28.46-.05-1.33-.02-2.67.1-3.99.47-4.89 2.78-29.3 6.95-73.26-24.24-4.86-37.7-7.57-40.4-8.11a8.572 8.572 0 01-6.76-10.06c.16-.81.43-1.59.81-2.32 4.33-8.33 38.94-74.98 43.27-83.32C15.37 153.35 186.56 5.79 385.69 24.72c240.09 22.82 313.91 256.89 197.4 490.3 2.7 6.79 16.22 40.72 40.56 101.79"
          id="a"
        />
        <path
          d="M86.04 367.43c0 9.45-3.08 17.12-6.89 17.12-3.81 0-6.9-7.67-6.9-17.12 0-9.45 3.09-17.12 6.9-17.12 3.81 0 6.89 7.67 6.89 17.12z"
          id="b"
        />
        <path d="M39.05 488.6s25.93 10.82 68.22-4.08" id="c" />
        <path d="M100.86 373.14l11.01 1.21" id="d" />
        <path d="M100.86 364.78l11.22-1.51" id="e" />
        <path
          d="M345.23 377.63c-160.81 0-236.04-25.02-236.04-107.98 0-108.86 105.68-197.1 236.04-197.1 145.05 0 237.15 88.43 231.28 197.1-4.38 81.5-70.47 107.98-231.28 107.98z"
          id="f"
        />
        <path
          d="M362.62 347.09c35.33 47.35 54.96 73.65 58.89 78.91 2.17 2.91 6.28 3.52 9.19 1.35a6.555 6.555 0 002.65-5.27v-74.99h-70.73z"
          id="g"
        />
        <path d="M330.76 515.5" id="h" />
        <path d="M330.76 402.83" id="i" />
        <path
          d="M549.41 281.84c0 7.77-6.31 14.09-14.09 14.09s-14.1-6.32-14.1-14.09c0-7.78 6.32-14.1 14.1-14.1 7.78 0 14.09 6.32 14.09 14.1z"
          id="k"
        />
        <path
          d="M397.99 327.8c0 7.78-6.32 14.09-14.1 14.09-7.78 0-14.09-6.31-14.09-14.09s6.31-14.1 14.09-14.1 14.1 6.32 14.1 14.1z"
          id="m"
        />
        <path
          d="M493.95 166.93c0 7.78-6.31 14.09-14.09 14.09s-14.09-6.31-14.09-14.09 6.31-14.09 14.09-14.09 14.09 6.31 14.09 14.09z"
          id="o"
        />
        <path
          d="M336.18 111.01c0 7.78-6.31 14.1-14.09 14.1s-14.1-6.32-14.1-14.1c0-7.78 6.32-14.09 14.1-14.09 7.78 0 14.09 6.31 14.09 14.09z"
          id="q"
        />
        <path
          d="M254.46 155.44c0 7.78-6.31 14.09-14.09 14.09s-14.1-6.31-14.1-14.09 6.32-14.1 14.1-14.1c7.78 0 14.09 6.32 14.09 14.1z"
          id="s"
        />
        <path
          d="M162.76 281.84c0 7.77-6.31 14.09-14.09 14.09s-14.09-6.32-14.09-14.09c0-7.78 6.31-14.1 14.09-14.1s14.09 6.32 14.09 14.1z"
          id="u"
        />
        <path
          d="M254.46 303.95c0 7.78-6.31 14.1-14.09 14.1s-14.1-6.32-14.1-14.1c0-7.78 6.32-14.09 14.1-14.09 7.78 0 14.09 6.31 14.09 14.09z"
          id="w"
        />
      </defs>
      <use xlinkHref="#a" fillOpacity={0} />
      <use xlinkHref="#a" fillOpacity={0} stroke="#8382ec" strokeWidth={8} />
      <use xlinkHref="#b" fill="#8382ec" />
      <use xlinkHref="#b" fillOpacity={0} stroke="#000" strokeOpacity={0} />
      <use xlinkHref="#c" fillOpacity={0} />
      <use xlinkHref="#c" fillOpacity={0} stroke="#8382ec" strokeWidth={8} />
      <use xlinkHref="#d" fillOpacity={0} />
      <use xlinkHref="#d" fillOpacity={0} stroke="#8382ec" strokeWidth={8} />
      <use xlinkHref="#e" fillOpacity={0} />
      <use xlinkHref="#e" fillOpacity={0} stroke="#8382ec" strokeWidth={8} />
      <use xlinkHref="#f" fill="#8382ec" />
      <use xlinkHref="#f" fillOpacity={0} stroke="#000" strokeOpacity={0} />
      <use xlinkHref="#g" fill="#8382ec" />
      <use xlinkHref="#g" fillOpacity={0} stroke="#000" strokeOpacity={0} />
      <use xlinkHref="#h" fillOpacity={0} />
      <use xlinkHref="#h" fillOpacity={0} stroke="#fff" strokeWidth={4} />
      <g>
        <use xlinkHref="#i" fillOpacity={0} />
        <use xlinkHref="#i" fillOpacity={0} stroke="#fff" strokeWidth={4} />
      </g>
      <g
        onClick={() => selectPoint({ text: 'การมองเห็น', id: 'j' })}
        className={`${selectedId === 'j' ? 'animate-pulse' : ''}`}
      >
        <filter
          id="j"
          x={504.22}
          y={250.74}
          width={62.19}
          height={66.19}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation={2} />
          <feOffset dy={4} result="afterOffset" />
          <feFlood floodColor="#000" floodOpacity={0.25} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" />
          <feComposite in2="SourceAlpha" operator="out" />
        </filter>
        <path
          d="M549.41 281.84c0 7.77-6.31 14.09-14.09 14.09s-14.1-6.32-14.1-14.09c0-7.78 6.32-14.1 14.1-14.1 7.78 0 14.09 6.32 14.09 14.1z"
          fill="#fff"
          fillOpacity={1}
          filter="url(#j)"
        />
        <use xlinkHref="#k" fill={`${selectedId === 'j' ? '#9e1d01' : '#dc9b90'}`} />
      </g>
      <g
        onClick={() => selectPoint({ text: 'การฟัง', id: 'l' })}
        className={`${selectedId === 'l' ? 'animate-pulse' : ''}`}
      >
        <filter
          id="l"
          x={352.8}
          y={296.7}
          width={62.19}
          height={66.19}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation={2} />
          <feOffset dy={4} result="afterOffset" />
          <feFlood floodColor="#000" floodOpacity={0.25} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" />
          <feComposite in2="SourceAlpha" operator="out" />
        </filter>
        <path
          d="M397.99 327.8c0 7.78-6.32 14.09-14.1 14.09-7.78 0-14.09-6.31-14.09-14.09s6.31-14.1 14.09-14.1 14.1 6.32 14.1 14.1z"
          fill="#fff"
          fillOpacity={1}
          filter="url(#l)"
        />
        <use xlinkHref="#m" fill={`${selectedId === 'l' ? '#9e1d01' : '#dc9b90'}`} />
      </g>
      <g
        onClick={() => selectPoint({ text: 'การรับรู้ภาษา', id: 'n' })}
        className={`${selectedId === 'n' ? 'animate-pulse' : ''}`}
      >
        <filter
          id="n"
          x={448.77}
          y={135.84}
          width={62.19}
          height={66.19}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation={2} />
          <feOffset dy={4} result="afterOffset" />
          <feFlood floodColor="#000" floodOpacity={0.25} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" />
          <feComposite in2="SourceAlpha" operator="out" />
        </filter>
        <path
          d="M493.95 166.93c0 7.78-6.31 14.09-14.09 14.09s-14.09-6.31-14.09-14.09 6.31-14.09 14.09-14.09 14.09 6.31 14.09 14.09z"
          fill="#fff"
          fillOpacity={1}
          filter="url(#n)"
        />
        <use xlinkHref="#o" fill={`${selectedId === 'n' ? '#9e1d01' : '#dc9b90'}`} />
      </g>
      <g
        onClick={() => selectPoint({ text: 'การรับสัมผัส', id: 'p' })}
        className={`${selectedId === 'p' ? 'animate-pulse' : ''}`}
      >
        <filter
          id="p"
          x={290.99}
          y={79.92}
          width={62.19}
          height={66.19}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation={2} />
          <feOffset dy={4} result="afterOffset" />
          <feFlood floodColor="#000" floodOpacity={0.25} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" />
          <feComposite in2="SourceAlpha" operator="out" />
        </filter>
        <path
          d="M336.18 111.01c0 7.78-6.31 14.1-14.09 14.1s-14.1-6.32-14.1-14.1c0-7.78 6.32-14.09 14.1-14.09 7.78 0 14.09 6.31 14.09 14.09z"
          fill="#fff"
          fillOpacity={1}
          filter="url(#p)"
        />
        <use xlinkHref="#q" fill={`${selectedId === 'p' ? '#9e1d01' : '#dc9b90'}`} />
      </g>
      <g
        onClick={() => selectPoint({ text: 'การเคลื่อนไหว', id: 'r' })}
        className={`${selectedId === 'r' ? 'animate-pulse' : ''}`}
      >
        <filter
          id="r"
          x={209.27}
          y={124.34}
          width={62.19}
          height={66.19}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation={2} />
          <feOffset dy={4} result="afterOffset" />
          <feFlood floodColor="#000" floodOpacity={0.25} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" />
          <feComposite in2="SourceAlpha" operator="out" />
        </filter>
        <path
          d="M254.46 155.44c0 7.78-6.31 14.09-14.09 14.09s-14.1-6.31-14.1-14.09 6.32-14.1 14.1-14.1c7.78 0 14.09 6.32 14.09 14.1z"
          fill="#fff"
          fillOpacity={1}
          filter="url(#r)"
        />
        <use xlinkHref="#s" fill={`${selectedId === 'r' ? '#9e1d01' : '#dc9b90'}`} />
      </g>
      <g
        onClick={() => selectPoint({ text: 'การคิดวิเคราะห์', id: 't' })}
        className={`${selectedId === 't' ? 'animate-pulse' : ''}`}
      >
        <filter
          id="t"
          x={117.58}
          y={250.74}
          width={62.19}
          height={66.19}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation={2} />
          <feOffset dy={4} result="afterOffset" />
          <feFlood floodColor="#000" floodOpacity={0.25} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" />
          <feComposite in2="SourceAlpha" operator="out" />
        </filter>
        <path
          d="M162.76 281.84c0 7.77-6.31 14.09-14.09 14.09s-14.09-6.32-14.09-14.09c0-7.78 6.31-14.1 14.09-14.1s14.09 6.32 14.09 14.1z"
          fill="#fff"
          fillOpacity={1}
          filter="url(#t)"
        />
        <use xlinkHref="#u" fill={`${selectedId === 't' ? '#9e1d01' : '#dc9b90'}`} />
      </g>
      <g
        onClick={() => selectPoint({ text: 'การพูด', id: 'v' })}
        className={`${selectedId === 'v' ? 'animate-pulse' : ''}`}
      >
        <filter
          id="v"
          x={209.27}
          y={272.86}
          width={62.19}
          height={66.19}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
        >
          <feFlood />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation={2} />
          <feOffset dy={4} result="afterOffset" />
          <feFlood floodColor="#000" floodOpacity={0.25} />
          <feComposite in2="afterOffset" operator="in" />
          <feMorphology operator="dilate" />
          <feComposite in2="SourceAlpha" operator="out" />
        </filter>
        <path
          d="M254.46 303.95c0 7.78-6.31 14.1-14.09 14.1s-14.1-6.32-14.1-14.1c0-7.78 6.32-14.09 14.1-14.09 7.78 0 14.09 6.31 14.09 14.09z"
          fill="#fff"
          fillOpacity={1}
          filter="url(#v)"
        />
        <use xlinkHref="#w" fill={`${selectedId === 'v' ? '#9e1d01' : '#dc9b90'}`} />
      </g>
    </svg>
  )
}

export default Brain
