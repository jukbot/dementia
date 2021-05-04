import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/outro'
import FooterNav from '../Global/FooterNav'

const OutroContent: FC = (): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)

  return (
    <div className="flex flex-col items-center w-full h-full overflow-auto">
      <section className={`text-center flex flex-col h-full p-8 ${data?.space_type} sm:max-w-[500px]`}>
        <h1
          className="text-xl xs:text-2xl font-light text-[#444444] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.title ?? '' }}
        />
        {data?.image_url ? (
          <img src={`${data?.image_url}`} className="object-contain w-full px-8 md:h-96" alt={data.image_alt} />
        ) : (
          ''
        )}
        <h2
          className="text-xl xs:text-2xl font-light text-[#444444] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}
        />
      </section>
      <FooterNav prev={data?.prev} next={data?.next} lightTheme={false} className="mt-auto" />
    </div>
  )
}

export default OutroContent
