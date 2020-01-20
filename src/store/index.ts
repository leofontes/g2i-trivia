import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import quiz from './quiz/reducer'

export default function configureStore() {
  const rootReducer = combineReducers({
    quiz,
  })

  return createStore(rootReducer, applyMiddleware(thunk))
}
