import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { ChevronLeftIcon} from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme';
import {LinearGradient} from 'expo-linear-gradient';
import Cast from '../components/cast';

export default function MovieScreen() {

  var { width, height } = Dimensions.get("window");

  const {params: item} = useRoute();
  const navigation = useNavigation();

  const [isFavourite, toggleFavourite] = useState(false);
  const [cast, setCast] = useState([1,2,3,4,5]);
  let movieName = "Black Panther"

  useEffect(() => {
    // call the movie detail api
  }, [item])
  

  return (
    <ScrollView 
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900"
    >
      {/* back button and movie poster */}
     
      <View className="w-full">
          <SafeAreaView className=" absolute z-20 pt-8  w-full flex-row justify-between items-center px-6">
            <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.background} className="rounded-xl  p-1">
              <ChevronLeftIcon size="28" color="white" strokeWidth={2.5}/>  
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)} className="pt-[1.5vh]">
              <HeartIcon size="35" color={isFavourite? theme.background : "white"}/>
            </TouchableOpacity>
          </SafeAreaView>
          <View>
            <Image
              source={require('../assets/images/image3.jpg')}
              style={{width, height: height * 0.55}} />
            <LinearGradient
              colors={['transparent', 'rgba(23,23,23,0.8)' , 'rgba(23,23,23,1)']}
              style={{width,height: height* 0.40}}
              start={{x: 0.5 , y: 0 }}
              end={{x:0.5 , y: 1}}
              className="absolute bottom-0"
            />
          </View>
      </View>

      {/* movie details */}

      <View style={{marginTop: -(height*0.09)}} className=" space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider p-2">{movieName}</Text>

      {/* status , release, runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center"> Released • 2020 • 170 min</Text>

      {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">  Action • </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">Thrill • </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">Comedy </Text>
        </View>
      {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
        Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.
        </Text>
      </View>

      {/* cast */}
        <Cast cast={cast}/>
      
    </ScrollView>
  )
}