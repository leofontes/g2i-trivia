import React from 'react'
import {ActivityIndicator, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native'
import BasicText from './BasicText'

interface Props {
  label: string
  onPress: () => void
  loading?: boolean

  labelColor: string
  bgColor: string
  width?: number

  style?: StyleProp<ViewStyle>
}

export default function Button(props: Props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.touchable,
        props.style,
        {backgroundColor: props.bgColor, width: props.width},
      ]}>
      <View>
        {!props.loading && (
          <BasicText color={props.labelColor} center>
            {props.label}
          </BasicText>
        )}
        {props.loading && <ActivityIndicator color={props.labelColor} />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 16,
  },
})
