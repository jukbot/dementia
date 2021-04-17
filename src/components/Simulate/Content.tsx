import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/simulate'
import FooterNav from '../Global/FooterNav'

const SimulateContent: FC = (): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)

  return (
    <div className={`h-full flex flex-col fixed w-full ${data?.bg_color}`}>
      <section className={`text-center flex flex-col h-full px-8 py-12 space-y-8 ${data?.space_type}`}>
        {data?.image_url ? (
          <img src={`/public${data?.image_url}`} className="object-contain w-full h-72" alt="simulate" />
        ) : (
          ''
        )}
        <h1
          className={`text-2xl font-light ${data?.text_color} leading-relaxed`}
          dangerouslySetInnerHTML={{ __html: data?.title ?? '' }}
        />
      </section>
      <FooterNav
        prev={data?.prev ?? null}
        next={data?.next ?? null}
        lightTheme={data?.light_theme ?? true}
        className={'mt-auto'}
      />
    </div>
  )
}

export default SimulateContent
