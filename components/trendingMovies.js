import React, { useRef, useEffect} from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";

var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();

  const handleClick = ()=>{
    navigation.navigate('Movie')
    
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

const MovieCard = ({ scrollViewRef, handleClick }) => {
  return ( 
        <TouchableOpacity>
          <Image
            source={require("../assets/images/image2.jpg")}
            style={{
              width: width * 0.6,
              height: height * 0.4,
            }}
            className="rounded-3xl mr-3"
          />
        </TouchableOpacity>
  );
};
