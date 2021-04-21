import React, { useEffect } from 'react'
import { FC } from 'react'

interface Props {
  title: string
  content: string
  buttonText: string
  isShown: boolean
  setOpenModal: (active: boolean, continues: boolean) => void
}

const Modal: FC<Props> = ({
  title = '',
  content = '',
  buttonText = 'Close',
  isShown = false,
  setOpenModal = () => {},
}) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLDivElement
      if (target && target.className) {
        if (typeof target.className.indexOf === 'function' && target.className.includes('modal')) {
          return setOpenModal(false, false)
        }
      }
    }

    if (isShown) {
      window.addEventListener('click', handleClick)
    }
    return window.removeEventListener('click', handleClick)
  }, [isShown, setOpenModal])

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none modal">
        <div className="relative w-auto max-w-xl px-6 py-12 mx-auto modal">
          <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-md shadow-md outline-none focus:outline-none">
            <div className="flex items-start justify-center pt-8">
              <h3 className="text-2xl font-medium text-[#6866e7]">{title}</h3>
            </div>
            <div className="relative flex-auto px-6">
              <p
                className="my-4 text-lg font-light font-pridi text-[#444444]"
                dangerouslySetInnerHTML={{ __html: content ?? '' }}
              />
            </div>
            <div className="flex items-end justify-center pt-6 pb-8 mt-auto">
              <button
                type="button"
                onClick={() => setOpenModal(false, true)}
                className="inline-flex items-center px-4 py-2 text-lg font-medium border rounded-md shadow-dark hover:shadow-lg bg-[#6866e7] border-[#6866e7] text-white hover:text-gray-700 hover:bg-white hover:border-gray-100 focus:outline-none"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-30 modal" onTouchEnd={() => setOpenModal(false, false)}></div>
    </div>
  )
}

export default Modal
