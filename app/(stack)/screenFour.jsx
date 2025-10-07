import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const screenFour = () => {
    return (
        <View style={styles.container}>
            <Text>Screen Four</Text>
        </View>
    )
}

export default screenFour

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