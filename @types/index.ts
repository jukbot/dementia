interface Map {
  [key: string]: string | undefined | null
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
