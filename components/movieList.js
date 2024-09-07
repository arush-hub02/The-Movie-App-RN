import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';

export default function MovieList({title, data}) {
    let movieName = 'Spider Man';
    const navigation = useNavigation();

    var { width, height } = Dimensions.get("window");


  return (
    <View className=" mb-8 space-y-4">
        <View className="flex flex-row justify-between items-center mx-4">
            <Text className="text-white text-2xl font-semibold">{title}</Text>
            <TouchableOpacity>
                <Text style={styles.text} className="text-lg">See All</Text>
            </TouchableOpacity>
        </View>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
           { 
                data.map((item, index)=>{
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={()=>navigation.navigate('Movie', item)}
                        >
                            <View>
                                <Image
                                    source={require('../assets/images/image1.jpg')}
                                    className="rounded-2xl mr-3" 
                                    style={{width: width*0.33 , height: height*0.22}} 
                                    
                                    /> 
                                <Text className="text-neutral-300 ml-1">{movieName.length >14 ? movieName.slice(0,14)+"..." : movieName}</Text>
                            </View>
                            
                        </TouchableWithoutFeedback>
                    )
                })
            }
        </ScrollView>
    
    </View>
  )
}