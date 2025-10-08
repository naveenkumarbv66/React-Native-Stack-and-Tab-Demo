import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import useGenericBackButton from './hooks/useGenericBackButton'

const snScreenThree = ({ navigation, route }) => {
    const { itemName, itemId } = route.params;
    
    // Use the generic back button hook
    useGenericBackButton(navigation);
    
    return (
        <View style={styles.container}>
            <Text>snScreenThree</Text>
            <View style={{ margin: 10 }}></View>
            <Text>{`Received itemName: ${itemName} and itemId: ${itemId}`}</Text>
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go to Screen Four with navigate"
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.navigate('Screen Four', {
                        itemName: 'From Screen Three',
                        itemId: 3,
                    });
                }}
            />
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go to Screen Four with Replace"
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.replace('Screen Four', {
                        itemName: 'From Screen Three with replace',
                        itemId: 33,
                    });
                }}
            />
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go to Screen Four with push"
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.push('Screen Four', {
                        itemName: 'From Screen Three with push',
                        itemId: 333,
                    });
                }}
            />
            <View style={{ margin: 10 }}></View>
            <Button
                title="Go Back with pop"
                onPress={() => {
                    // Pass the data as the second argument
                    navigation.pop();
                }}
            />
        </View>
    )
}

export default snScreenThree

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