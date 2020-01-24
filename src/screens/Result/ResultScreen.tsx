import React, {useState} from 'react'
import SafeArea from '../../components/basic/SafeArea'
import {Animated, StyleSheet, View} from 'react-native'
import Colors from '../../utils/colors'
import BasicText from '../../components/basic/BasicText'
import {useSelector} from 'react-redux'
import {ApplicationState} from '../../utils/store'
import {getScoreString} from '../../business/QuizBusiness'
import ResultList from '../../components/compound/ResultList'
import Button from '../../components/basic/Button'
import {useNavigation} from 'react-navigation-hooks'
import ConfettiCannon from 'react-native-confetti-cannon'
import CardView from "../../components/basic/CardView"

export default () => {
  const [contentOpacity, setContentOpacity] = useState<Animated.AnimatedValue>(
    new Animated.Value(0),
  )
  const [loadingCardOpacity, setLoadingCardOpacity] = useState<
    Animated.AnimatedValue
  >(new Animated.Value(1))

  const {questions} = useSelector((state: ApplicationState) => state.quiz)
  const {navigate} = useNavigation()

  const onPlayAgainButtonPress = () => {
    navigate('Home')
  }

  return (
    <SafeArea>
      <Animated.View style={{opacity: loadingCardOpacity, flex: 1, justifyContent: 'center'}}>
        <CardView style={styles.card}>
          <BasicText center color={Colors.pink} light>
            Let's see how you did!
          </BasicText>
        </CardView>
      </Animated.View>

      <Animated.View style={{opacity: contentOpacity, flex: 1}}>
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
      </Animated.View>

      {/*<ConfettiCannon count={200} fadeOut={true} origin={{x: 0, y: 0}} />*/}
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  card: {
    margin: 16,
    padding: 16,
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
