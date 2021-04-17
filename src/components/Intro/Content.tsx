import React, { FC, lazy } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/intro'
import FooterNav from '../Global/FooterNav'

const importView = (name: string) => lazy(() => import(`./Infographic/${name}`))

const IntroContent: FC = (): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)
  const InfoGraphic = importView(data?.infographic ?? '')
  return (
    <>
      <section className={`flex flex-col h-full p-8 ${data?.space_type}`}>
        {data?.heading ? <h2 className="text-2xl font-medium text-center text-[#A7A5F0] mb-4">{data?.heading}</h2> : ''}
        {data?.title ? (
          <h1
            className="text-2xl font-light leading-relaxed text-center text-white"
            dangerouslySetInnerHTML={{ __html: data?.title ?? '' }}
          />
        ) : (
          ''
        )}
        {data?.content ? (
          <p
            className="text-base font-light leading-relaxed text-white font-pridi"
            dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}
          />
        ) : (
          ''
        )}
        {data?.infographic ? <InfoGraphic className="object-contain bg-contain" /> : ''}
        {data?.footer ? (
          <p
            className="text-base font-light leading-relaxed text-white font-pridi"
            dangerouslySetInnerHTML={{ __html: data?.footer ?? '' }}
          />
        ) : (
          ''
        )}
      </section>
      <FooterNav prev={data?.prev ?? '/'} next={data?.next ?? '/'} lightTheme={true} className="mt-auto" />
    </>
  )
}

export default IntroContent
