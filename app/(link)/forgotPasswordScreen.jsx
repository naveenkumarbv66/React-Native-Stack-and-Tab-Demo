import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const forgotPasswordScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Forgot password Screen</Text>
            <Link href='/registerScreen' style={styles.link}>
                Register Here
            </Link>
        </View>
    )
}

export default forgotPasswordScreen

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
        margin: 30,
        borderBottomWidth: 1,
        fontSize: 20,
        color: 'blue'
    }
})