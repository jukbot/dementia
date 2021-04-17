import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/quiz'
import FooterQuiz from '../Global/FooterQuiz'

interface Props {
  bgColor?: string
}

const QuizContent: FC<Props> = ({ bgColor }): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)
  return (
    <>
      <section
        className={`${bgColor} flex flex-col space-y-8 h-full py-8 px-8 max-w-screen-md self-center overflow-auto`}
      >
        {data?.heading ? <h2 className="text-xl font-medium text-center text-[#999999]">{data?.heading}</h2> : ''}
        {data?.heading ? (
          <h1
            className="text-2xl font-light text-center text-[#666666]"
            dangerouslySetInnerHTML={{ __html: data?.question ?? '' }}
          />
        ) : (
          ''
        )}
        {data?.image_url ? <img className="object-contain w-full" src={data.image_url} alt={data.image_alt} /> : ''}
      </section>
      <FooterQuiz prev={data?.prev ?? '/'} next={data?.next ?? '/'} className="mt-auto" />
    </>
  )
}

export default QuizContent
