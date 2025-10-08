import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const index = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>index</Text>
            <Button
                title="Go to Screen Two"
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.navigate('Screen Two', {
                        itemName: 'From Screen One',
                        itemId: 1,
                    });
                }}
            />
        </View>
    )
}

export default index

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