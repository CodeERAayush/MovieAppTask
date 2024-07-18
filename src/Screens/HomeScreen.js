import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect,useState } from 'react'
import { API } from '../Constants/api'
import MovieComponent from '../Components/MovieCard'

const HomeScreen = ({navigation}) => {

    const [movieData,setMovieData]=useState([])
    const [query,setQuery]=useState()

    const callApi=async (query)=>{

        if(!query){
            setMovieData([]);
            return;
        }
        let response = await fetch(`${API.OMDB}?t=${query}&apikey=${API?.API_KEY}`);
        let data = await response.json();
        setMovieData(prev=>[...prev,data])

    }

    // useEffect(()=>{
    //     callApi(query)
    // },[query])

    const renderItem=({item})=>{
        return <MovieComponent
        item={item}
        navigation={navigation}
        />
    }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <TextInput
        placeholder='Search By Moview name'
        style={styles?.input}
        onChangeText={(text)=>{
                setQuery(text)
                callApi(text)
        }}
        />
      <FlatList
      data={movieData}
      keyExtractor={({item,index})=>item?.imdbIDg}
      renderItem={renderItem}
      ListEmptyComponent={()=><View style={{alignSelf:'center'}}>
            <Text>No Data Found</Text>
      </View>}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'White'
    },
    input:{
        marginHorizontal:20,
        borderRadius:20,
        elevation:5,
        marginVertical:5,
        height:50,
        backgroundColor:'white',
        padding:10
    }
})