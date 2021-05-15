export interface Map {
  [key: string]: string | undefined | null | number
}
export interface FormData extends Map {
  gender: string | null
  age: string | null
  province: string | null
  postal: string | null
  relevance: string | null
  other?: string | null
}

export interface HospitalChoice {
  id: number
  title: string
  value: string
  prev: number | null
  next: number | null
  content: string
}
export interface QuizData {
  route: string
  prev: string
  next: string
  heading: string
  question: string
  answer: string
  answerChoice: boolean
  image: string
}

export interface SurveyData extends Record<string, string | undefined | null | number> {
  id?: string | null
  totalCount: string | null
  choiceA: string | null
  choiceB: string | null
  choiceC: string | null
  choiceD: string | null
  choiceE: string | null
  publicHospital?: string | null
  privateHospital?: string | null
  nearbyClinic?: string | null
}

export interface SurveyChoice {
  id: number
  title: string
  content: string
  text: string
  thumbnail_url: string
  image_url: string
  code: string
  column: string
  index: number
  value: string
  prev: number | null
  next: number | null
}
