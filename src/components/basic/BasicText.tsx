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

  extraLight?: boolean
  light?: boolean
  regular?: boolean
  medium?: boolean
  bold?: boolean
  black?: boolean
}

function resolveFont(props: Props): TextStyle {
  const {extraLight, light, regular, medium, bold, black} = props

  if (regular) {
    return styles.regular
  }
  if (extraLight) {
    return styles.extraLight
  }
  if (light) {
    return styles.light
  }
  if (medium) {
    return styles.medium
  }
  if (bold) {
    return styles.bold
  }
  if (black) {
    return styles.black
  }

  // console.warn('Font family missing')
  return styles.regular
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
  extraLight,
  light,
  regular,
  medium,
  bold,
  black,
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
      resolveFont({extraLight, light, regular, medium, bold, black}),
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
  regular: {fontFamily: 'SourceSansPro-Regular'},
  extraLight: {fontFamily: 'SourceSansPro-ExtraLight'},
  light: {fontFamily: 'SourceSansPro-Light'},
  medium: {fontFamily: 'SourceSansPro-Medium'},
  bold: {fontFamily: 'SourceSansPro-Bold'},
  black: {fontFamily: 'SourceSansPro-Black'},
})

export default BasicText
