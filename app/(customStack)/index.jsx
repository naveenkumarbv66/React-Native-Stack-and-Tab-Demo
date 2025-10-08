import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const customStackindex = () => {
    return (
        <View style={styles.container}>
            <Text>customStackindex Home</Text>
            <Link href='/cStackTwo' style={styles.link}>
                Screen Two
            </Link>
        </View>
    )
}

export default customStackindex

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