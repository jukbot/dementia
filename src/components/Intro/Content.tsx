import React, { FC, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/intro'
import FooterNav from '../Global/FooterNav'

const importView = (name: string) => lazy(() => import(`./Infographic/${name}.tsx`))

const IntroContent: FC = (): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)
  const InfoGraphic = importView(data?.infographic ?? '')
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <section
        className={`flex flex-col h-full ${data?.space_type} sm:max-w-[500px] self-center mb-2 lg:space-y-8 p-6`}
      >
        {data?.heading ? (
          <h2 className="text-2xl font-medium text-center text-[#A7A5F0] mb-4 md:text-3xl">{data?.heading}</h2>
        ) : (
          ''
        )}
        {data?.title ? (
          <h1
            className="font-sans text-2xl font-light leading-relaxed text-center text-white"
            dangerouslySetInnerHTML={{ __html: data?.title ?? '' }}
          />
        ) : (
          ''
        )}
        {data?.infographic ? (
          <Suspense fallback={<div className="w-full h-64" />}>
            <InfoGraphic />
          </Suspense>
        ) : (
          ''
        )}
      </section>
      <FooterNav prev={data?.prev} next={data?.next} lightTheme={true} className={data?.nav_position} />
    </div>
  )
}

export default IntroContent
