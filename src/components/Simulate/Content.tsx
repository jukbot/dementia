import React, { FC, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/simulate'
import FooterNav from '../Global/FooterNav'

const importView = (path: string, name: string) => lazy(() => import(`./${path}/${name}.tsx`))

const SimulateContent: FC = (): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)
  const Choice = importView('Choice', data?.component ?? '')
  // TODO: optimize by using preload images as array

  return (
    <div className={`h-full flex flex-col fixed w-full ${data?.bg_color}`}>
      <section className={`flex flex-col h-full px-8 py-8 space-y-8 ${data?.space_type}`}>
        {data?.image_url ? (
          <img
            src={`${data?.image_url}`}
            className={`${
              data?.image_url ? 'opacity-100' : 'opacity-0'
            } delay-100	flex-shrink-0 object-contain px-6 transition-opacity`}
            alt="simulate"
          />
        ) : (
          ''
        )}
        <h1
          className={`text-2xl font-light ${data?.text_color} leading-normal text-center`}
          dangerouslySetInnerHTML={{ __html: data?.title ?? '' }}
        />
        {data?.component ? (
          <Suspense fallback={null}>
            <Choice />
          </Suspense>
        ) : (
          ''
        )}
      </section>
      <FooterNav
        prev={data?.prev ?? null}
        next={data?.next ?? null}
        lightTheme={data?.light_theme ?? true}
        className={data?.image_url ? 'absolute' : 'mt-auto'}
      />
    </div>
  )
}

export default SimulateContent
