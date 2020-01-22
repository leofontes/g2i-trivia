import React, {FunctionComponent} from 'react'
import {FlatList, ListRenderItem, StyleSheet, View, Image} from 'react-native'
import Question from '../../model/Question'
import Colors from '../../utils/colors'
import BasicText from '../basic/BasicText'

const CheckIcon = require('../../assets/icons/check/ic.png')
const ClearIcon = require('../../assets/icons/clear/ic.png')

interface Props {
  questions: Question[]
}

const ResultList: FunctionComponent<Props> = ({questions}) => {
  const _keyExtractor = (item: Question, index: number): string =>
    `${index} key`

  const _renderItem: ListRenderItem<Question> = ({item}) => {
    const isAnswerCorrect = item.user_answer?.is_correct ?? false
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isAnswerCorrect ? Colors.green : Colors.red,
          },
        ]}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={isAnswerCorrect ? CheckIcon : ClearIcon}
            height={50}
            width={50}
          />
        </View>
        <View style={styles.content}>
          <BasicText center size={20} style={styles.questionLabel}>
            {item.question}
          </BasicText>
        </View>
      </View>
    )
  }

  return (
    <FlatList
      data={questions}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.white,
    borderBottomWidth: 1,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 8,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    tintColor: Colors.white,
  },

  content: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 2,
    justifyContent: 'center',
    padding: 8,
  },

  questionLabel: {
    flex: 1,
  },
})

export default ResultList
