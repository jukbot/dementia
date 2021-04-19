interface Map {
  [key: string]: string | undefined | null
}
export interface FormData extends Map {
  gender: string | null
  age: string | null
  province: string | null
  postal: string | null
  choice: string | null
  other?: string | null
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
