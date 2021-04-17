import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/outro'
import FooterNav from '../Global/FooterNav'

const OutroContent: FC = (): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)

  return (
    <>
      <section className={`text-center flex flex-col h-full px-8 py-12 ${data?.space_type}`}>
        <h1
          className="text-2xl font-light text-[#444444] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.title ?? '' }}
        />
        {data?.image_url ? <img className="object-contain h-64" src={data.image_url} alt={data.image_alt} /> : ''}
        <h2
          className="text-2xl font-light text-[#444444] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}
        />
      </section>
      <FooterNav prev={data?.prev ?? '/'} next={data?.next ?? '/'} lightTheme={false} className={'absolute'} />
    </>
  )
}

export default OutroContent
