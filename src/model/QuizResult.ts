import Question from './Question'

export default interface QuizResult {
  response_code: number
  results: Question[]
}
