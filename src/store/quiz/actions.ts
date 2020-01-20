import {QuizErrorFetch, QuizLoading, QuizSuccessFetch} from './types'
import Question from '../../model/question'
import {AppThunkAction} from '../../utils/store'
import {get, QueryParams} from '../../utils/api'
import QuizResult from '../../model/QuizResult'

export function quizLoading(): QuizLoading {
  return {
    type: 'quiz/LOADING',
  }
}

export function quizSuccessFetch(questions: Question[]): QuizSuccessFetch {
  return {
    type: 'quiz/SUCCESS_FETCH',
    payload: {
      questions,
    },
  }
}

export function quizErrorFetch(): QuizErrorFetch {
  return {
    type: 'quiz/ERROR_FETCH',
  }
}

export function loadQuiz(
  amount: number,
  difficulty: string,
  type: string,
): AppThunkAction {
  return async dispatch => {
    try {
      dispatch(quizLoading())
      const queryParams: QueryParams = {
        amount,
        difficulty,
        type,
      }

      const response: QuizResult = await get(queryParams)
      dispatch(quizSuccessFetch(response.results))
    } catch (err) {
      dispatch(quizErrorFetch())
    }
  }
}
