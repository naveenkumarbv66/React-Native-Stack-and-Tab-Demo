import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

function NotificationsScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.goBack()}>Go back home</Button>
        </View>
    );
}

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});