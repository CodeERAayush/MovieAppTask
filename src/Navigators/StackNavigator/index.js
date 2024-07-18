import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen';
import MovieDetails from '../../Screens/MovieDetails';

const Stack = createStackNavigator();

export const MyStack=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}