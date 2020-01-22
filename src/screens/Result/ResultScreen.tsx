import React from 'react'
import SafeArea from '../../components/basic/SafeArea'
import {ScrollView, StyleSheet, View} from 'react-native'
import Colors from '../../utils/colors'
import BasicText from '../../components/basic/BasicText'
import {useSelector} from 'react-redux'
import {ApplicationState} from '../../utils/store'
import {getScoreString} from '../../business/QuizBusiness'
import ResultList from '../../components/compound/ResultList'
import Button from '../../components/basic/Button'
import {useNavigation} from 'react-navigation-hooks'

export default () => {
  const {questions} = useSelector((state: ApplicationState) => state.quiz)
  const { navigate } = useNavigation()

  const onPlayAgainButtonPress = () => {
    navigate('Home')
  }

  return (
    <SafeArea>
      <View style={styles.scoreContainer}>
        <BasicText center size={22} color={Colors.black}>
          {getScoreString(questions)}
        </BasicText>
      </View>

      <View style={styles.content}>
        <ResultList questions={questions} />
      </View>
      <Button
        label="PLAY AGAIN?"
        onPress={onPlayAgainButtonPress}
        labelColor={Colors.white}
        bgColor={Colors.lightPurple}
      />
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  scoreContainer: {
    backgroundColor: Colors.lightPurple,
    justifyContent: 'center',
    paddingVertical: 8,
  },

  content: {
    margin: 16,
  },
})
