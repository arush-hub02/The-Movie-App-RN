import { View, Text, TouchableOpacity, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { PencilIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import { styles } from '../../theme'

export default function UserInfoLogOut(props) {
  return (
    <View className="w-full  rounded-lg p-2 flex-col justify-center items-center">
            <View className="w-full bg-[#FFFFFF20] rounded-lg p-4 flex-col justify-center items-center relative overflow-hidden">
                <UserCircleIcon size="90" color="white"/>
                <View className="flex-row items-center justify-center gap-2">
                    {/* <Text className="text-3xl font-bold text-white">Arush</Text>
                   <TouchableOpacity> 
                    <PencilIcon size="20" color="white"/>
                   </TouchableOpacity> */}
                <TouchableOpacity onPress={props.handleSignIn}>
                <View className="rounded-2xl overflow-hidden px-4 py-2" style={styles.background} >
                   <Text className="text-white font-medium text-md">Sign in</Text>
                </View> 
                </TouchableOpacity>
                </View>
                {/* <Text className="text-lg font-normal text-white">arush123@enveu.com</Text> */}
            </View>
    </View>
  )
}