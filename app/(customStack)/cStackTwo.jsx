import { StyleSheet, Text, View, Image } from 'react-native'
import { Link, Stack } from 'expo-router'
import React from 'react'

function LogoTitle() {
    return (
        <View>
            <Text style={{ color: '#FFF' }} >Custton Name <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> </Text>
        </View>

    );
}

const customStackTwo = () => {
    return (
        <View style={styles.container}>

            <Stack.Screen
                options={{
                    title: 'My Screen Two',
                    headerStyle: { backgroundColor: '#f4511e' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                    headerTitle: props => <LogoTitle {...props} />,
                }}
            />

            <Text>customStackTwo</Text>
            <Link href='/cStackThree' style={styles.link}>
                Screen Three
            </Link>
        </View>
    )
}

export default customStackTwo

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
        width: 30,
        height: 30,
    },
})