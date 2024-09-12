import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftStartOnRectangleIcon, Cog8ToothIcon, EyeSlashIcon, PhoneArrowUpRightIcon, RectangleGroupIcon, UserMinusIcon } from 'react-native-heroicons/solid'
import { StarIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


export default function AppSettings({title}) {

    const navigation = useNavigation();

    const GPT = "https://chatgpt.com/";
  return (
    <View className="w-full mt-4">
        <Text className="text-white text-xl font-bold pl-2 uppercase">{title}</Text>
    <View className="w-full  rounded-lg p-2 flex-col justify-center items-center ">
            <View className="w-full bg-[#FFFFFF10] rounded-lg flex-col justify-center items-center overflow-hidden">
            <TouchableOpacity className="w-full">
               <View className="flex-row p-4  w-full justify-start items-center  bg-[#FFFFFF10]">
                <Cog8ToothIcon size="25" color="white"/>
                <View className="flex-col ml-3">
                    <Text className="text-white text-lg font-semibold">Settings & Preferences</Text>
                </View>
               </View>
            </TouchableOpacity>
                    <View className="w-[100vw] h-[1px] bg-[#80808090] ml-15 "></View>

            <TouchableOpacity className="w-full" onPress={()=>navigation.navigate("PrivacyPolicy")}>
               <View className="flex-row p-4  w-full justify-start items-center  bg-[#FFFFFF10]">
                <EyeSlashIcon size="25" color="white"/>
                <View className="flex-col ml-3 ">
                    <Text className="text-white text-lg font-semibold">Privacy Policy</Text>
               </View>
                </View>
            </TouchableOpacity>
                    <View className="w-[100vw] h-[1px] bg-[#80808090] ml-15 "></View>

            <TouchableOpacity className="w-full">
               <View className="flex-row p-4  w-full justify-start items-center  bg-[#FFFFFF10]">
                <RectangleGroupIcon size="25" color="white"/>
                <View className="flex-col ml-3 ">
                    <Text className="text-white text-lg font-semibold">Terms & Conditions</Text>
                </View>
               </View>
            </TouchableOpacity>
                    <View className="w-[100vw] h-[1px] bg-[#80808090] ml-15 "></View>

            <TouchableOpacity className="w-full">
               <View className="flex-row p-4  w-full justify-start items-center  bg-[#FFFFFF10]">
                <PhoneArrowUpRightIcon size="25" color="white"/>
                <View className="flex-col ml-3 ">
                    <Text className="text-white text-lg font-semibold">Contact Us</Text>
                </View>
               </View>
            </TouchableOpacity>
                    <View className="w-[100vw] h-[1px] bg-[#80808090] ml-15 "></View>

            <TouchableOpacity className="w-full">
               <View className="flex-row p-4  w-full justify-start items-center  bg-[#FFFFFF10]">
                <StarIcon size="25" color="white"/>
                <View className="flex-col ml-3 ">
                    <Text className="text-white text-lg font-semibold">Rate the app</Text>
                </View>
               </View>
            </TouchableOpacity>    
            </View>
        </View>
    </View>
  )
}

