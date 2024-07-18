import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MovieComponent = ({ item,navigation }) => {
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate('MovieDetails',{item:item})}
        style={styles?.card}>
            <Image
                source={{ uri: item?.Poster }}
                style={styles?.poster}
                resizeMode='cover'
            />
            <Text>Name: {item.Title}</Text>
            <Text>Director: {item.Director}</Text>
            <Text>Year: {item.Year}</Text>
        </TouchableOpacity>
    )
}

export default MovieComponent

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    poster: {
        width: 100,
        height: 120
    }
})