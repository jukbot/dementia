import React, { FC, lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/simulate'
import { usePrevious } from '../../utils/usePrevious'
import FooterNav from '../Global/FooterNav'

const importView = (path: string, name: string) => lazy(() => import(`./${path}/${name}.tsx`))

const SimulateContent: FC = (): JSX.Element => {
  const { id } = useParams()
  const [className, setClassName] = useState<string>('opacity-0')
  const [route, setRoute] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [component, setComponent] = useState<string | null>(null)
  const prevRoute = usePrevious(route)
  const data = content.find((v) => v.route === id)
  const Choice = importView('Choice', data?.component ?? '')

  useEffect(() => {
    setRoute(data?.route ?? '')
    setClassName('opacity-0')

    if (data?.route !== prevRoute) {
      setTimeout(function () {
        setTitle(data?.title ?? '')
        setColor(data?.bg_color ?? '')
        setComponent(data?.component ?? null)
        setImageUrl(data?.image_url ?? '')
        setClassName('opacity-100')
      }, 500)
    }
    if (component) {
      return setComponent(null)
    }
  }, [data])

  // TODO: optimize by using preload images as array

  return (
    <div className={`${color} transition-colors duration-1000 ease-in-out fixed h-full w-full`}>
      <div className={`flex flex-col w-full h-full items-center lg:space-y-8 overflow-auto`}>
        <section className={`flex flex-col h-full w-full space-y-8 p-6 sm:max-w-[500px] ${data?.space_type} `}>
          <img
            src={`${imageUrl}`}
            className={`${
              imageUrl ? className : 'hidden'
            } flex-shrink-0 delay-100 object-contain px-6 transition-opacity ease-in duration-300`}
            alt="simulate"
          />
          <h1
            className={`${className} transition-opacity ease-in duration-300 text-2xl font-light ${data?.text_color} leading-normal text-center`}
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
          {component ? (
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
