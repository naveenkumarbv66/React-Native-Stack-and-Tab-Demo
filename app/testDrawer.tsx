import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function TestDrawerScreen() {
    const router = useRouter();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Test Drawer Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/(drawerdemo)')}
            >
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/(drawerdemo)/notifications')}
            >
                <Text style={styles.buttonText}>Go to Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
                <Text style={styles.buttonText}>Toggle drawer</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TestDrawerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
