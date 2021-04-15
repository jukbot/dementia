export interface QuizRouter {
  id: string
}

export interface QuizData {
  layout: string
  route: string
  prev: string
  next: string
  heading: string
  question: string
  answer: string
  answerChoice: boolean
  image: string
}
