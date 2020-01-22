import React, {useEffect} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {useNavigation} from 'react-navigation-hooks'
import SafeArea from '../../components/basic/SafeArea'
import Button from '../../components/basic/Button'
import Colors from '../../utils/colors'
import BasicText from '../../components/basic/BasicText'
import {useSelector, useDispatch} from 'react-redux'
import {ApplicationState} from '../../utils/store'
import {loadQuiz} from '../../store/quiz/actions'

export default () => {
  const {status} = useSelector((state: ApplicationState) => state.quiz)
  const dispatch = useDispatch()
  const {navigate} = useNavigation()

  useEffect(() => {
    dispatch(loadQuiz(10, 'hard', 'boolean'))
  }, [dispatch])

  const onBeginPress = () => {
    if (status === 'success') {
      navigate('Quiz')
    } else if (status === 'error') {
      //TODO alert
    }
  }

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <View>
            {/* TODO add bold */}
            <BasicText center>Welcome to the Trivia Challenge!</BasicText>
            <BasicText center>
              You will be presented with 10 True or False questions.!
            </BasicText>
            <BasicText center>Can you score 100%?</BasicText>
          </View>
        </View>
        <Button
          label="BEGIN"
          onPress={onBeginPress}
          labelColor={Colors.white}
          bgColor={Colors.purple}
          width={200}
          style={styles.buttonBegin}
          loading={status === 'loading'}
        />
      </ScrollView>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flexGrow: 2,
    justifyContent: 'center',
  },

  buttonBegin: {
    marginBottom: 16,
  },
})
