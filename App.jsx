import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import MovieDetails from './src/Screens/MovieDetails'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/Navigators/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})