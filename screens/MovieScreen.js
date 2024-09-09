import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { ChevronLeftIcon} from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme';
import {LinearGradient} from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {

  

  const {params: item} = useRoute();
  const navigation = useNavigation();

  const [isFavourite, toggleFavourite] = useState(false);
  const [cast, setCast] = useState([1,2,3,4,5]);
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
  let movieName = "John Wick"

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
              source={require('../assets/images/image2.jpg')}
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
        John Wick is a neo-noir action film series starring Keanu Reeves as a retired assassin seeking vengeance. The first film, released in 2014, begins with Wick avenging the death of his beloved dog, a gift from his late wife. Known for its stylish choreography, intense fight sequences, and gunplay, the series redefined modern action cinema. Wick’s character is both relentless and emotionally driven, fueled by his love for his wife. The franchise has expanded with sequels, each delving deeper into a shadowy criminal underworld. Keanu Reeves’ dedication to stunt work and training adds authenticity to the role. The films blend brutal action with moments of quiet reflection, making Wick a unique and iconic antihero. With its growing success, the John Wick series has become a cultural phenomenon.
        </Text>
      </View>

      {/* cast */}
        <Cast navigation={navigation} cast={cast}/>

      {/* similar movies */}
        <MovieList title="Similar Movies" hideSeeAll= {true} data={similarMovies}/>
      
    </ScrollView>
  )
}