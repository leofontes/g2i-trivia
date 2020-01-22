import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'
import HomeScreen from './screens/Home/HomeScreen'
import QuizScreen from './screens/Quiz/QuizScreen'
import ResultScreen from './screens/Result/ResultScreen'
import configureStore from './store'

const store = configureStore()

const Stack = createStackNavigator(
  {
    Home: HomeScreen,
    Quiz: QuizScreen,
    Result: ResultScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)
const Container = createAppContainer(Stack)

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
