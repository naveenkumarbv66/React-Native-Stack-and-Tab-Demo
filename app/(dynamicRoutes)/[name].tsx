import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router';
import React from 'react'

const dynamicRoutesDetailsScreen = () => {
    const { name } = useLocalSearchParams();
    //const finalName: string = name as string; // Asserting 'name' as a single string

    let finalName: string;
    if (typeof name === 'string') {
        finalName = 'value ' + name;
    } else if (Array.isArray(name)) {
        finalName = name[0]; // Or handle multiple names as needed
    } else {
        finalName = 'NA'; // Default value or error handling if 'name' is not found
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: finalName
                }}
            />
            <Text>Data recevied : {name}</Text>
        </View>
    )
}

export default dynamicRoutesDetailsScreen

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
    }
})