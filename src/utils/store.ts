import {ThunkAction} from 'redux-thunk'
import {QuizAction, QuizState} from '../store/quiz/types'

export type Status = 'loading' | 'success' | 'error' | 'none'

export type AppBasicAction = QuizAction

export type AppThunkAction = ThunkAction<
  void,
  ApplicationState,
  undefined,
  AppBasicAction
>

export interface ApplicationState {
  quiz: QuizState
}
