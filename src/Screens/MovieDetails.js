import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const MovieDetails = () => {

    // let item={"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy","Director":"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 15 wins & 60 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.6","imdbVotes":"764,992","imdbID":"tt3896198","Type":"movie","DVD":"N/A","BoxOffice":"$389,813,101","Production":"N/A","Website":"N/A","Response":"True"}

    // const {height,width}=useWindowDimensions()

    const route=useRoute();
    const {item}=route?.params

  return (
    <View style={styles?.container}>
        <View style={styles?.movieCard}>
       <Image
                source={{ uri: item?.Poster }}
                style={styles?.poster}
                resizeMode='cover'
            />
            <Text>Name: {item.Title}</Text>
            <Text>Director: {item.Director}</Text>
            <Text>Year: {item.Year}</Text>
            <Text>Actors: {item.Actors}</Text>
            <Text>Language: {item.Language}</Text>
            <Text>Genre: {item.Genre}</Text>
    </View>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'White',
        alignItems:'center',
        justifyContent:'center'
    },
    poster: {
        width: 100,
        height: 100
    },
    movieCard:{
        width:'90%',
        backgroundColor:'white',
        elevation:10,
        padding:10,
        alignItems:'center',
        borderRadius:10,
        paddingVertical:30
    }
})