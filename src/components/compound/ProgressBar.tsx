import React, {FunctionComponent, useEffect, useState} from 'react'
import {View, StyleSheet, Animated, ViewStyle} from 'react-native'
import Colors from '../../utils/colors'

interface Props {
  styleProps: ViewStyle
  onComplete: () => void
  time: number
  bgColor: string
}

const ProgressBar: FunctionComponent<Props> = ({
  styleProps,
  onComplete,
  time,
  bgColor,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progress, setProgress] = useState<Animated.AnimatedValue>(
    new Animated.Value(0),
  )

  useEffect(() => {
    Animated.timing(progress, {
      duration: time,
      toValue: 100,
    }).start(onComplete)
  }, [onComplete, progress, time])

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  })

  return (
    <View style={[styles.container, styleProps]}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[StyleSheet.absoluteFill, {backgroundColor: bgColor, width}]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: Colors.black,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 5,
  },
})

export default ProgressBar
