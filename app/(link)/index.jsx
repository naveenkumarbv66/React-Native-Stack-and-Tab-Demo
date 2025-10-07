import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const homeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Home Screen</Text>
            <Link href='/registerScreen' style={styles.link}>
                Register Here
            </Link>
            <Link href='/forgotPasswordScreen' style={styles.link}>
                Forgot password Here
            </Link>
        </View >
    )
}

export default homeScreen

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