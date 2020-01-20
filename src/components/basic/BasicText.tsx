import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native'
import Colors from '../../utils/colors'

interface Props extends TextProps {
  size?: number
  color?: string

  center?: boolean
  justify?: boolean
  left?: boolean
  right?: boolean
}

function resolveAlignment(props: Props): TextStyle {
  const {center, justify, left, right} = props

  if (center) {
    return styles.txtCenter
  }
  if (justify) {
    return styles.txtJustify
  }
  if (left) {
    return styles.txtLeft
  }
  if (right) {
    return styles.txtRight
  }
  return {}
}

const BasicText: FunctionComponent<Props> = ({
  children,
  size,
  color,
  center,
  justify,
  left,
  right,
}) => (
  <Text
    style={[
      styles.default,
      size !== undefined && {
        fontSize: size,
      },
      color !== undefined && {
        color,
      },
      resolveAlignment({center, justify, right, left}),
    ]}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: Colors.black,
  },
  txtCenter: {textAlign: 'center'},
  txtJustify: {textAlign: 'justify'},
  txtLeft: {textAlign: 'left'},
  txtRight: {textAlign: 'right'},
})

export default BasicText
