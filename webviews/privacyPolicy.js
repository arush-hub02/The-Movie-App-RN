import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';


export default function PrivacyPolicy() {

    const GPT = "https://chatgpt.com/";
  return (
    <SafeAreaView style={{width:"100%" , height:"100%"}} className="pt-8">
      <WebView source={{uri: GPT}}/>
    </SafeAreaView>
  )
}