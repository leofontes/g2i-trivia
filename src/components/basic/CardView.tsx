import React, {FunctionComponent} from 'react'
import {View, Platform, StyleSheet, ViewProps} from 'react-native'
import Colors from '../../utils/colors'

interface Props extends ViewProps {}

const CardView: FunctionComponent<Props> = ({children, style}) => {
  return (
    <View style={[styles.containerPlatform, styles.container, style]} {...extraProps}>
      {children}
    </View>
  )
}

const extraProps = Platform.select({
  ios: {},
  android: {
    elevation: 2,
  },
})

const styles = StyleSheet.create({
  containerPlatform: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      shadowOffset: {width: 0, height: 4},
    },
    android: {},
  }),
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
})

export default CardView
