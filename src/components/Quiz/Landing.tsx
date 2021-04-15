import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
// import { ReactComponent as Ellipse } from '../../images/quiz/ellipse.svg'
import CheckLight from '../Icons/Quiz/CheckLight'
import CrossLight from '../Icons/Quiz/CrossLight'

const QuizLanding = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/quiz/1')
  }

  return (
    <>
      <div className="bg-primary">
        <section className="flex justify-center w-full m-6">
          <div className="space-y-2 text-center">
            <h1 className="text-xl">คุณรู้จัก</h1>
            <h2 className="text-4xl">ภาวะสมอง</h2>
            <h2 className="text-xl">ดีแค่ไหน่</h2>
          </div>
          <div className="py-4">
            {/* <Ellipse /> */}
            Ellipse
          </div>
          <div>
            <p className="text-xl text-center max-w-prose">ลองทายดูซิว่า ข้อมูลภาวะสมองเสื่อมต่อไปนี้ จริงหรือเท็จ</p>
            <div className="flex py-4 space-x-4">
              <CheckLight />
              <CrossLight />
            </div>
          </div>
          <div>
            <button
              className="p-4 text-lg font-bold bg-gray-100 rounded-md shadow-lg text-primary hover:bg-gray-200"
              onClick={handleClick}
            >
              ทดลองเล่น
            </button>
          </div>
        </section>
        <Outlet />
      </div>
    </>
  )
}

export default QuizLanding
