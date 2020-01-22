import React, {FunctionComponent} from 'react'
import {StyleSheet, View, ViewStyle} from 'react-native'
import CardView from '../basic/CardView'
import Question from '../../model/Question'
import Colors from '../../utils/colors'
import BasicText from '../basic/BasicText'
import Button from '../basic/Button'

interface Props {
  question: Question
  propStyles: ViewStyle

  onTruePress: () => void
  onFalsePress: () => void
}

const QuestionBooleanCard: FunctionComponent<Props> = ({
  question,
  propStyles,
  onFalsePress,
  onTruePress,
}) => {
  return (
    <CardView style={[styles.card, propStyles]}>
      <BasicText color={Colors.black} center size={26}>
        {question.question}
      </BasicText>

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
