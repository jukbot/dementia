import React, { FC, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/survey'
import FooterSurvey from '../Global/FooterSurvey'

const importView = (name: string) => lazy(() => import(`./Form/${name}`))

interface Props {
  bgColor?: string
}

const SimulateContent: FC<Props> = ({ bgColor }): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)
  const Survey = importView(data?.survey ?? '')

  return (
    <main className={`h-full flex flex-col fixed w-full ${bgColor}`}>
      <section className="flex flex-col h-full px-8 py-12 text-center">
        {data?.survey ? (
          <Suspense fallback={<div className="w-full h-64" />}>
            <Survey />
          </Suspense>
        ) : (
          ''
        )}
      </section>
      <FooterSurvey next={data?.next ?? ''} lightTheme={false} className={'mt-auto'} />
    </main>
  )
}

export default SimulateContent