import React, { useRef, useEffect} from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { image500 } from "../api/moviedb";

var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();

  const handleClick = (item)=>{
    navigation.navigate('Movie', item)
  }

  return (
    <View className="mb-8">
      <Text className="text-white text-2xl mx-4 mb-5 mt-3 font-semibold">Trending</Text>
  
       <Carousel
        data={data}
        renderItem={({item})=> <MovieCard item={item} handleClick={handleClick} />} 
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display:"flex" , alignItems: 'center'}}
       />
      
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return ( 
        <TouchableWithoutFeedback onPress={handleClick}>
          <Image
            // source={{uri: image500(item.poster_path)}}
            // source={item.results.poster_path}
            source={require('../assets/images/image2.jpg')}
            style={{
              width: width * 0.6,
              height: height * 0.4,
            }}
            className="rounded-3xl"
          />
        </TouchableWithoutFeedback>
  );
};
