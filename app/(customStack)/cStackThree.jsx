import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Link, Stack } from 'expo-router'
import { useState } from 'react';
import React from 'react'

function LogoTitle() {
    return (
        <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    );
}

const customStackThree = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "  Custom title",
                    headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
                    headerLeft: () => <Button onPress={() => setCount(c => c + 1)} title="Count" />,
                }}
            />
            <Text>customStackThree</Text>
            <Text>Count: {count}</Text>
            <Link href='/cStackFour' style={styles.link}>
                Screen Four
            </Link>
        </View>
    )
}

export default customStackThree

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
    image: {
        width: 50,
        height: 50,
    },
})