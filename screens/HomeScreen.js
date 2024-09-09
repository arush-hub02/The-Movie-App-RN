import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
// import { fetchTrendingMovies } from "../api/moviedb";

export default function HomeScreen() {
    const [trending, setTrending] = useState([1,1,1,1,1,1]);
    const [Upcoming, setUpcoming] = useState([1,1,1,1,1,1]);
    const [topRated, setTopRated] = useState([1,1,1,1]);
    const [loading, setLoading] =   useState(false);

    const navigation = useNavigation();

    // useEffect(()=>{
    //   getTrendingMovies();      
    // },[])

    // const getTrendingMovies = async ()=>{
    //   const data = await fetchTrendingMovies();
    //   console.log('got trending movies: ', data);
    //   if(data && data.results){
    //     setTrending(data.results);
    //   }
      
    // }

  return (
    <View className="flex-1 bg-neutral-800 pt-2">
      {/* searchBar and logo */}
      <SafeAreaView className="mb-3">
        <View className="flex-row justify-between items-center mx-5">
            <Bars3CenterLeftIcon  size="30" strokeWidth={2} color="white"/>
            <Text className="text-3xl font-bold text-white" >
                <Text style={styles.text}>M</Text>ovies</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Search")} >
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
        </View>
      </SafeAreaView>

    {
      loading? (
        <Loading/>
      ):(
        <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 10 }}
      >

        {/* Trending movies carousel */}

        {
          trending.length>0 && <TrendingMovies data={trending}/>
        }
        

        {/* upcomming movies row */}

        <MovieList title="Upcoming" data={Upcoming}  />

        {/* Top Rated movies row */}

        <MovieList title="Top Rated" data={topRated} />
        
      </ScrollView>
      )
    }


      
    </View>
  );
}
