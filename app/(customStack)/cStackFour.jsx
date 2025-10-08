import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import React from 'react'

const customStackTour = () => {
    const navigation = useNavigation();
    const router = useRouter();

    const handleDismiss = (count) => {
        router.dismiss(count)
    };

    const handleGoToRoutScreen = () => {
        router.dismissTo('/')
    };

    const handleDismissAll = () => {
        router.dismissAll()
    };

    const handleCanDismiss = (count) => {
        if (router.canDismiss()) {
            router.dismiss(count)
        }
    };

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={{ margin: 10 }}>customStack Four</Text>
            <Button title="Go to Screen One (passing 3)" onPress={() => handleDismiss(3)} />
            <Text style={{ margin: 10 }}>Disabled header by using useNavigation()</Text>
            <Button title="Go to Screen Two by Can dismmiss (passing 2)" onPress={() => handleCanDismiss(2)} />
            <Text style={{ margin: 10 }}>Go to Home screen, click below button</Text>
            <Button title="Go to /" onPress={() => handleGoToRoutScreen()} />
            <Text style={{ margin: 10 }}>To Dismiss All, click below button</Text>
            <Button title="Dismiss All" onPress={() => handleDismissAll()} />
        </View>
    )
}

export default customStackTour

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    font: {
        fontSize: 20,
        fontFamily: 'bold'
    },

    link: {
        margin: 10,
        borderBottomWidth: 1,
        fontSize: 20,
        color: 'blue'
    },
})