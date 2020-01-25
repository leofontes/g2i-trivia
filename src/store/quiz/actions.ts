import {
  QuizErrorFetchAction,
  QuizLoadingAction,
  QuizSetAnswersAction,
  QuizSuccessFetchAction,
} from './types'
import Question from '../../model/question'
import {AppThunkAction} from '../../utils/store'
import {get, QueryParams} from '../../utils/api'
import QuizFetchResult from '../../model/QuizFetchResult'
import {decodeHTMLEntities} from '../../utils/strings'

export function quizLoadingAction(): QuizLoadingAction {
  return {
    type: 'quiz/LOADING',
  }
}

export function quizSuccessFetchAction(
  questions: Question[],
): QuizSuccessFetchAction {
  return {
    type: 'quiz/SUCCESS_FETCH',
    payload: {
      questions,
    },
  }
}

export function quizErrorFetchAction(): QuizErrorFetchAction {
  return {
    type: 'quiz/ERROR_FETCH',
  }
}

export function quizSetAnswersAction(answers: Boolean[]): QuizSetAnswersAction {
  return {
    type: 'quiz/SET_ANSWERS',
    payload: {
      answers,
    },
  }
}

export function loadQuiz(
  amount: number,
  difficulty: string,
  type: string,
): AppThunkAction {
  return async dispatch => {
    try {
      dispatch(quizLoadingAction())
      const queryParams: QueryParams = {
        amount,
        difficulty,
        type,
      }

      const response: QuizFetchResult = await get(queryParams)
      if (response.error) {
        dispatch(quizErrorFetchAction())
      } else {
        const results = response.results.map(result => ({
          ...result,
          question: decodeHTMLEntities(result.question),
        }))
        dispatch(quizSuccessFetchAction(results))
      }
    } catch (err) {
      dispatch(quizErrorFetchAction())
    }
  }
}
