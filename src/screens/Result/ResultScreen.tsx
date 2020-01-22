import React from 'react'
import SafeArea from '../../components/basic/SafeArea'
import {StyleSheet, View} from 'react-native'
import Colors from '../../utils/colors'
import BasicText from '../../components/basic/BasicText'
import {useSelector} from 'react-redux'
import {ApplicationState} from '../../utils/store'
import {getScoreString} from '../../business/QuizBusiness'
import ResultList from '../../components/compound/ResultList'
import Button from '../../components/basic/Button'
import {useNavigation} from 'react-navigation-hooks'
import ConfettiCannon from 'react-native-confetti-cannon'

export default () => {
  const {questions} = useSelector((state: ApplicationState) => state.quiz)
  const {navigate} = useNavigation()

  const onPlayAgainButtonPress = () => {
    navigate('Home')
  }

  return (
    <SafeArea>
      <View style={styles.scoreContainer}>
        <BasicText center size={22} color={Colors.blueAqua}>
          {getScoreString(questions)}
        </BasicText>
      </View>

      <View style={styles.content}>
        <ResultList questions={questions} />
      </View>
      <Button
        label="PLAY AGAIN?"
        onPress={onPlayAgainButtonPress}
        labelColor={Colors.blueAqua}
        bgColor={Colors.black}
        width={200}
      />

      <ConfettiCannon count={200} fadeOut={true} origin={{x: 0, y: 0}} />
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  scoreContainer: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    paddingVertical: 8,
  },

  content: {
    flex: 1,
    margin: 16,
  },
})
