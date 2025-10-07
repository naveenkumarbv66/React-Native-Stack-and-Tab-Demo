import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const dynamicRouteScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Dynamic Screen</Text>
            <Link href='/Kumar' style={styles.link}>
                Pass String (Kumar)
            </Link>
            <Link href={{
                pathname: '/[name]',
                params: { name: 'Naveen' },
            }} style={styles.link}>
                Pass String (Naveen)
            </Link>
        </View >
    )
}

export default dynamicRouteScreen

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