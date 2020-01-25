import Question from './Question'

export default interface QuizFetchResult {
  response_code: number
  results: Question[]
  error: string
}
