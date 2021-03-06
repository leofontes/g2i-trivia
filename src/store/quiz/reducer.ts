import {QuizState} from './types'
import {AppBasicAction} from '../../utils/store'
import {mapAnswersToQuestions} from '../../business/QuizBusiness'

const initialState: QuizState = {
  questions: [],
  status: 'none',
}

export default function quiz(
  state: QuizState = initialState,
  action: AppBasicAction,
): QuizState {
  switch (action.type) {
    case 'quiz/LOADING':
      return {
        status: 'loading',
        questions: [],
      }

    case 'quiz/SUCCESS_FETCH':
      return {
        status: 'success',
        questions: action.payload.questions,
      }

    case 'quiz/ERROR_FETCH':
      return {
        status: 'error',
        questions: [],
      }

    case 'quiz/SET_ANSWERS':
      return {
        ...state,
        questions: mapAnswersToQuestions(
          state.questions,
          action.payload.answers,
        ),
      }

    default:
      return state
  }
}
