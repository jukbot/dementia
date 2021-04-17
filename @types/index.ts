export interface QuizRouter {
  id: string
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
