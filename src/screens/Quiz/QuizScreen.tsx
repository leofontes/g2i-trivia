import React, {useState} from 'react'
import SafeArea from '../../components/basic/SafeArea'
import {Animated, ScrollView, StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {ApplicationState} from '../../utils/store'
import QuestionBooleanCard from '../../components/compound/QuestionBooleanCard'
import BasicText from '../../components/basic/BasicText'
import Colors from '../../utils/colors'
import {useNavigation} from 'react-navigation-hooks'
import {quizSetAnswersAction} from '../../store/quiz/actions'

export default () => {
  const {questions} = useSelector((state: ApplicationState) => state.quiz)
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionLabelOpacity, setQuestionLabelOpacity] = useState<
    Animated.AnimatedValue
  >(new Animated.Value(1))
  const [answers, setAnswers] = useState<Boolean[]>([])
  const currentQuestion = questions[currentQuestionNumber]
  const {navigate} = useNavigation()
  const dispatch = useDispatch()

  const onTruePress = () => {
    handleAnswer(true)
  }

  const onFalsePress = () => {
    handleAnswer(false)
  }

  const handleAnswer = (answer: boolean) => {
    setAnswers([...answers, answer])
    const nextQuestionNumber = currentQuestionNumber + 1

    if (nextQuestionNumber < questions.length) {
      Animated.timing(questionLabelOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setCurrentQuestionNumber(nextQuestionNumber)
        Animated.timing(questionLabelOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start()
      })
    } else {
      dispatch(quizSetAnswersAction([...answers, answer]))
      navigate('Result')
    }
  }

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.categoryContainer}>
          <BasicText center color={Colors.blueAqua} size={18}>
            Category
          </BasicText>
          <BasicText center size={22} medium color={Colors.white}>
            {currentQuestion.category}
          </BasicText>
        </View>
        <View style={styles.mainContent}>
          <QuestionBooleanCard
            question={currentQuestion}
            propStyles={styles.questionCard}
            onTruePress={onTruePress}
            onFalsePress={onFalsePress}
            questionOpacity={questionLabelOpacity}
          />
          <BasicText center size={18}>{`${currentQuestionNumber + 1} of ${
            questions.length
          }`}</BasicText>
        </View>
      </ScrollView>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  categoryContainer: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    paddingVertical: 8,
  },

  mainContent: {
    justifyContent: 'center',
    flexGrow: 2,
  },
  questionCard: {
    margin: 16,
  },
})
