import React, {useEffect} from 'react'
import {ScrollView, StyleSheet, View, Alert} from 'react-native'
import {useNavigation} from 'react-navigation-hooks'
import SafeArea from '../../components/basic/SafeArea'
import Button from '../../components/basic/Button'
import Colors from '../../utils/colors'
import BasicText from '../../components/basic/BasicText'
import {useSelector, useDispatch} from 'react-redux'
import {ApplicationState} from '../../utils/store'
import {loadQuiz} from '../../store/quiz/actions'
import CardView from '../../components/basic/CardView'

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
      Alert.alert(
        'Something went wrong',
        'There was an error processing your request',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Try again',
            style: 'default',
            onPress: () => {
              dispatch(loadQuiz(10, 'hard', 'boolean'))
            },
          },
        ],
      )
    }
  }

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <CardView style={styles.card}>
            <BasicText
              center
              bold
              size={30}
              color={Colors.blueAqua}
              style={styles.welcomeLabel}>
              {`Welcome to the\nTrivia Challenge!`}
            </BasicText>
            <View style={styles.separator} />
            <BasicText center light size={32} color={Colors.pink} style={styles.descLabel}>
              You will be presented with 10 True or False questions.
            </BasicText>
            <BasicText
              center
              regular
              size={32}
              color={Colors.yellowLime}
              style={styles.questionLabel}>
              Can you score 100%?
            </BasicText>
          </CardView>
        </View>
        <Button
          label="BEGIN"
          onPress={onBeginPress}
          labelColor={Colors.blueAqua}
          bgColor={Colors.black}
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
  card: {
    backgroundColor: Colors.black,
    margin: 16,
  },

  welcomeLabel: {
    marginVertical: 16,
  },
  separator: {
    backgroundColor: Colors.yellowLime,
    height: 2,
  },
  descLabel: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },

  questionLabel: {
    marginVertical: 16,
    textDecorationLine: 'underline',
  },

  buttonBegin: {
    marginBottom: 16,
  },
})
