import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const snScreenTwo = ({ navigation, route }) => {
    const { itemName, itemId } = route.params;
    return (
        <View style={styles.container}>
            <Text>snScreenTwo</Text>
            <View style={{ margin: 10 }}></View>
            <Text>{`Received itemName: ${itemName} and itemId: ${itemId}`}</Text>
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go to Screen Three"
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.navigate('Screen Three', {
                        itemName: 'from Screen Two',
                        itemId: 2,
                    });
                }}
            />
        </View>
    )
}

export default snScreenTwo

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