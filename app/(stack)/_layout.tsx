import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function Layout() {
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
            <Stack.Screen name="screenOne" options={{ title: 'Screen one', headerBackVisible: false }} />
            <Stack.Screen name="screenTwo" options={{ headerShown: false }} />
            <Stack.Screen name="screenFour" options={{ title: 'Screen Four' }} />
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