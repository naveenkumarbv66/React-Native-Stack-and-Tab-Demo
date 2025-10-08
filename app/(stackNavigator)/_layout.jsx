import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; //https://reactnavigation.org/docs/stack-navigator/?config=dynamic
//https://reactnavigation.org/docs/navigation-object/#setoptions

import index from './index';
import snScreenTwo from './snScreenTwo';
import snScreenThree from './snScreenThree';
import scScreenFour from './scScreenFour';
import scScreenFive from './scScreenFive'

const Stack = createStackNavigator();

export default function CustomNavigationStackLayout() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center', // Centers the header title on both iOS and Android
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            {/* Optionally configure static options outside the route.*/}
            <Stack.Screen name="Home" component={index} />
            <Stack.Screen name="Screen Two" component={snScreenTwo} />
            <Stack.Screen name="Screen Three" component={snScreenThree} />
            <Stack.Screen name="Screen Four" component={scScreenFour} />
            <Stack.Screen name="Screen Five" component={scScreenFive} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
});