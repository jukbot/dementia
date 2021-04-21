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

  // flex flex-col h-full p-8 undefined sm:max-w-[500px] self-center lg:space-y-8 overflow-auto
  return (
    <div className={`${data?.bg_color} fixed h-full w-full`}>
      <div className={`flex flex-col w-full h-full items-center lg:space-y-8`}>
        <section className={`flex flex-col h-full w-full p-8 space-y-8 sm:max-w-[500px] ${data?.space_type} `}>
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
          className={'mt-auto'}
        />
      </div>
    </div>
  )
}

export default SimulateContent
