import React, {useState} from 'react'
import SafeArea from '../../components/basic/SafeArea'
import {ScrollView, StyleSheet, View} from 'react-native'
import {useSelector} from 'react-redux'
import {ApplicationState} from '../../utils/store'
import QuestionBooleanCard from '../../components/compound/QuestionBooleanCard'
import BasicText from '../../components/basic/BasicText'
import Colors from '../../utils/colors'

export default () => {
  const {questions} = useSelector((state: ApplicationState) => state.quiz)
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [answers, setAnswers] = useState<Boolean[]>([])
  const currentQuestion = questions[currentQuestionNumber]

  const onTruePress = () => {
    setAnswers([...answers, true])
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  }

  const onFalsePress = () => {
    setAnswers([...answers, false])
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  }

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.categoryContainer}>
          <BasicText center color={Colors.white}>
            Category
          </BasicText>
          <BasicText center size={22}>
            {currentQuestion.category}
          </BasicText>
        </View>
        <View style={styles.mainContent}>
          <QuestionBooleanCard
            question={currentQuestion}
            propStyles={styles.questionCard}
            onTruePress={onTruePress}
            onFalsePress={onFalsePress}
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
    backgroundColor: Colors.blue,
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
