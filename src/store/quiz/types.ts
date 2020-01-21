import { Action } from 'redux'
import Question from '../../model/question'
import {Status} from '../../utils/store'

export interface QuizState {
  questions: Question[]
  status: Status
}

export interface QuizLoadingAction extends Action {
  type: 'quiz/LOADING'
}

export interface QuizSuccessFetchAction extends Action {
  type: 'quiz/SUCCESS_FETCH'
  payload: {
    questions: Question[]
  }
}

export interface QuizErrorFetchAction extends Action {
  type: 'quiz/ERROR_FETCH'
}

export interface QuizSetAnswersAction extends Action {
  type: 'quiz/SET_ANSWERS'
  payload: {
    answers: Boolean[]
  }
}

export type QuizAction =
  | QuizLoadingAction
  | QuizSuccessFetchAction
  | QuizErrorFetchAction
  | QuizSetAnswersAction
