import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles, theme } from "../theme";
import { HeartIcon } from "react-native-heroicons/solid";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import MovieList from "../components/movieList";

export default function PersonScreen() {
  var { width, height } = Dimensions.get("window");

  const navigation = useNavigation();

  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1,1,1,1,1,1]);

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* back button */}
      <SafeAreaView className="z-20 pt-8  w-full flex-row justify-between items-center px-6 my-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl  p-1"
        >
          <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          className="pt-[1.5vh]"
        >
          <HeartIcon
            size="35"
            color={isFavourite ? theme.background : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* person details */}
      <View>
        <View
          className="flex-row justify-center"
          //   style={{
          //     shadowColor: 'gray',
          //     shadowRadius: 40,
          //     shadowOffset: {width: 0 , height: 5},
          //     shadowOpacity: 1
          //     }}
        >
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
            <Image
              source={require("../assets/images/cast1.jpg")}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Keanu Reeves
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            London, United Kingdom
          </Text>
        </View>

        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">1964-09-02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 text-sm">Acting</Text>
          </View>
          <View className=" px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">64.23</Text>
          </View>
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Keanu Reeves, born on September 2, 1964, in Beirut, Lebanon, is a
            Canadian actor, producer, and musician, renowned for his versatility
            and enigmatic presence in the entertainment industry. Raised in
            Toronto, Canada, after moving around due to his mother's various
            marriages, Keanu had an unconventional upbringing. Despite a
            somewhat turbulent childhood marked by dyslexia and struggles in
            formal education, he found solace in acting and ice hockey,
            excelling as a goalie. His love for performance eventually led him
            to pursue acting full-time. Reeves gained early recognition in the
            late 1980s with his role as Ted "Theodore" Logan in the cult-classic
            comedy Bill & Ted's Excellent Adventure (1989), which showcased his
            unique ability to balance charm and humor. However, it wasn’t until
            the early 1990s that he began to make a significant mark in more
            action-driven and dramatic roles. His portrayal of an undercover FBI
            agent in Point Break (1991) and later as a police officer in the
            action-packed blockbuster Speed (1994) propelled him to
            international stardom. These films demonstrated his potential to be
            more than a comedic actor, showcasing his action hero persona, which
            would become a cornerstone of his career.
          </Text>
        </View>

        {/* movies */}
        <MovieList title={'Movies'} hideSeeAll={true} data={personMovies}/>
      </View>
    </ScrollView>
  );
}
