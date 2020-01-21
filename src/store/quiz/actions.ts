import {QuizErrorFetch, QuizLoading, QuizSuccessFetch} from './types'
import Question from '../../model/question'
import {AppThunkAction} from '../../utils/store'
import {get, QueryParams} from '../../utils/api'
import QuizFetchResult from '../../model/QuizFetchResult'
import {decodeHTMLEntities} from '../../utils/strings'

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

      const response: QuizFetchResult = await get(queryParams)
      const results = response.results.map(result => ({
        ...result,
        question: decodeHTMLEntities(result.question),
      }))
      dispatch(quizSuccessFetch(results))
    } catch (err) {
      dispatch(quizErrorFetch())
    }
  }
}
