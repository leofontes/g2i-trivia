import React, {FunctionComponent} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Colors from '../../utils/colors'

const SafeArea: FunctionComponent = ({children}) => {
  return <SafeAreaView style={styles.safearea}>{children}</SafeAreaView>
}

export default SafeArea

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: Colors.whiteIce,
    flex: 1,
    padding: 0,
  },
})
