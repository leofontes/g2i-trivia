import { Action } from 'redux'
import Question from '../../model/question'
import {Status} from '../../utils/store'

export interface QuizState {
  questions: Question[]
  status: Status
}

export interface QuizLoading extends Action {
  type: 'quiz/LOADING'
}

export interface QuizSuccessFetch extends Action {
  type: 'quiz/SUCCESS_FETCH'
  payload: {
    questions: Question[]
  }
}

export interface QuizErrorFetch extends Action {
  type: 'quiz/ERROR_FETCH'
}

export type QuizAction = QuizLoading | QuizSuccessFetch | QuizErrorFetch
