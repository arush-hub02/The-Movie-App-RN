import { View, Text, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../theme';
import { ChevronLeftIcon, HeartIcon, PencilIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import UserSettings from '../components/settings/userSettings';
import AppSettings from '../components/settings/appSettings';
import UserInfo from '../components/settings/userInfo';
import UserSettingLogOut from '../components/settings/userSettingLogOut';
import UserInfoLogOut from '../components/settings/userInfoLogOut';

var { width, height } = Dimensions.get("window");

export default function SettingScreen() {

    const [userLogin, setUserLogin] = useState(true);
    
    const handleSignOut = ()=>{
      setUserLogin(false);
    }

    const handleSignIn = ()=>{
      setUserLogin(true);
    }


    const navigation = useNavigation();

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView className="z-20 pt-8  w-full  justify-between items-center px-4 my-3">
      {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl  p-1 flex-start -ml-80 mb-5"
        >
          <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
        </TouchableOpacity>
        

        {/* user info */}

        {
          userLogin? (

            <UserInfo/>

          ):(
            <UserInfoLogOut/>
          )
        }

        {/* user settings */}

        {
            userLogin ? (
                <UserSettings title="user settings" handleSignOut={handleSignOut} />

            ):(
                <UserSettingLogOut title="user settings" handleSignIn={handleSignIn}/>
            )
        }

        {/* app settings */}
        
        <AppSettings title="app settings"/>
        
      </SafeAreaView>
      </ScrollView>
  )
}