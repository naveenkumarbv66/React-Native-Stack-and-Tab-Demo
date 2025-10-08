import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function CustomStackLayout() {
    return (
        <Stack
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
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="cStackOne" options={{ title: 'Screen One' }} />
            <Stack.Screen name="cStackTwo" options={{ title: 'Screen Two' }} />
            <Stack.Screen name="cStackThree" options={{ title: 'Screen Three' }} />
            <Stack.Screen name="cStackFour" options={{ title: 'Screen Four' }} />
        </Stack>
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