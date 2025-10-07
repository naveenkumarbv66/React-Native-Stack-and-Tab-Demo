import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: '#E38' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="tabOne"
                options={{
                    title: 'Tab One',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
            <Tabs.Screen
                name="tabTwo"
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
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