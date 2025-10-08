import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const scScreenFour = ({ navigation, route }) => {
    const { itemName, itemId } = route.params;
    return (
        <View style={styles.container}>
            <Text>scScreenFour</Text>
            <View style={{ margin: 10 }}></View>
            <Text>{`Received itemName: ${itemName} and itemId: ${itemId}`}</Text>
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go Back to Screen Two by using popTo."
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.popTo('Screen Two', { info: 'Used popTo to come back' });
                }}
            />
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go Back to Home screen by using popToTop."
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.popToTop();
                }}
            />
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go Back with goBack"
                onPress={() => {
                    // Go back to the previous screen
                    navigation.goBack()
                }}
            />
        </View>
    )
}

export default scScreenFour

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