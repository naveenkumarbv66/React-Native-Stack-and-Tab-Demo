import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View style={styles.container}>
            <Text>Stack Home</Text>
            <Link href='/registerScreen' style={styles.link}>
                not included in stack family
            </Link>
            <Link href='/screenOne' style={styles.link}>
                Screen One
            </Link>
            <Link href='/screenTwo' style={styles.link}>
                Screen Two
            </Link>
            <Link href='/screenThree' style={styles.link}>
                Screen Three
            </Link>
            <Link href='/screenFour' style={styles.link}>
                Screen Four
            </Link>
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