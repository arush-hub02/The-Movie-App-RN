import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftStartOnRectangleIcon, LockClosedIcon, UserMinusIcon } from 'react-native-heroicons/solid'

export default function UserSettingLogOut({title}) {
  return (
    <View className="w-full mt-4">
    <Text className="text-white text-xl font-bold pl-2 uppercase">{title}</Text>
<View className="w-full  rounded-lg p-2 flex-col justify-center items-center">
        <View className="w-full bg-[#FFFFFF10]  rounded-lg flex-col justify-center items-center overflow-hidden">
        <TouchableOpacity className="w-full">
           <View className="flex-row p-4 bg-[#FFFFFF10] w-full justify-start items-center">
            <LockClosedIcon size="25" color="white"/>
            <View className="flex-col ml-3 ">
                <Text className="text-white text-lg font-semibold">Change Password</Text>
                <Text className="text-white text-sm font-normal">Modify Access credentials securely</Text>
           </View>
            </View>
        </TouchableOpacity>
                {/* <View className="w-[100vw] h-[1px] bg-[#80808090] ml-15 "></View> */}
        </View>
    </View>
</View>
  )
}