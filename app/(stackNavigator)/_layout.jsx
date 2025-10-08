import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; //https://reactnavigation.org/docs/stack-navigator/?config=dynamic

import index from './index';
import snScreenTwo from './snScreenTwo';
import snScreenThree from './snScreenThree';
import scScreenFour from './scScreenFour';

const Stack = createStackNavigator();

export default function CustomNavigationStackLayout() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            {/* Optionally configure static options outside the route.*/}
            <Stack.Screen name="Stack Navigator Home" component={index} />
            <Stack.Screen name="Screen Two" component={snScreenTwo} />
            <Stack.Screen name="Screen Three" component={snScreenThree} />
            <Stack.Screen name="Screen Four" component={scScreenFour} />
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