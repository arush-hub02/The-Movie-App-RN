import { View, Text, Dimensions } from 'react-native'
import React from 'react'

export default function PersonScreen() {
    var { width, height } = Dimensions.get("window");

  return (
    <View>
      <Text>PersonScreen</Text>
    </View>
  )
}