import React, {FunctionComponent} from 'react'
import {StyleSheet, View, ViewStyle, Animated} from 'react-native'
import CardView from '../basic/CardView'
import Question from '../../model/Question'
import Colors from '../../utils/colors'
import BasicText from '../basic/BasicText'
import Button from '../basic/Button'

interface Props {
  question: Question
  propStyles: ViewStyle
  questionOpacity: Animated.AnimatedValue

  onTruePress: () => void
  onFalsePress: () => void
}

const QuestionBooleanCard: FunctionComponent<Props> = ({
  question,
  propStyles,
  onFalsePress,
  onTruePress,
  questionOpacity,
}) => {
  return (
    <CardView style={[styles.card, propStyles]}>
      <Animated.View style={{opacity: questionOpacity}}>
        <BasicText color={Colors.black} center size={26}>
          {question.question}
        </BasicText>
      </Animated.View>

      <View style={styles.separator} />

      <View style={styles.buttonsContainer}>
        <Button
          label="FALSE"
          onPress={onFalsePress}
          labelColor={Colors.white}
          bgColor={Colors.pink}
          style={styles.button}
        />
        <Button
          label="TRUE"
          onPress={onTruePress}
          labelColor={Colors.white}
          bgColor={Colors.yellowLime}
          style={styles.button}
        />
      </View>
    </CardView>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },

  separator: {
    backgroundColor: Colors.black,
    height: 1,
    marginVertical: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
})

export default QuestionBooleanCard
