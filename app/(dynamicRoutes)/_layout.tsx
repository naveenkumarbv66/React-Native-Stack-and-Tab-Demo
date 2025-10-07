import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function DynamicRoutesLayout() {
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
            <Stack.Screen name="index" options={{ title: 'Dynamic Routes' }} />
            <Stack.Screen name="[name]" options={{ title: 'Info Screen' }} />
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