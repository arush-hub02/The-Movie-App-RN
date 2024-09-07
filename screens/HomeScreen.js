import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";



export default function HomeScreen() {
    const [trending, setTrending] = useState([1,1,1,1,1]);
    const [Upcoming, setUpcoming] = useState([1,1,1,1]);
    const [topRated, setTopRated] = useState([1,1,1,1]);

  return (
    <View className="flex-1 bg-neutral-800 pt-2">
      {/* searchBar and logo */}
      <SafeAreaView className="mb-3">
        <View className="flex-row justify-between items-center mx-5">
            <Bars3CenterLeftIcon  size="30" strokeWidth={2} color="white"/>
            <Text className="text-3xl font-bold text-white" >
                <Text style={styles.text}>M</Text>ovies</Text>
            <TouchableOpacity>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 10 }}
      >

        {/* Trending movies carousel */}

        <TrendingMovies data={trending}/>

        {/* upcomming movies row */}

        <MovieList title="Upcoming" data={Upcoming} />

        {/* Top Rated movies row */}

        <MovieList title="Top Rated" data={topRated} />
        
      </ScrollView>
    </View>
  );
}
