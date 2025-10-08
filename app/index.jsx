import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const homeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Home Screen</Text>
            <Link href='/(stack)' style={styles.link}>
                Stack Demo
            </Link>
            <Link href='/(link)' style={styles.link}>
                Link Demo
            </Link>
            <Link href='/(tab)' style={styles.link}>
                Tab Demo
            </Link>
            <Link href='/(dynamicRoutes)' style={styles.link}>
                Dynamic Routes Demo
            </Link>
            <Link href='/(customStack)' style={styles.link}>
                Custom Stack Routes Demo
            </Link>
            <Link href='/(stackNavigator)' style={styles.link}>
                Stack Navigator Demo
            </Link>
            <Link href='/(nativeTabsDemo)' style={styles.link}>
                Native Tabs Demo
            </Link>
            <Link href='/(drawerdemo)' style={styles.link}>
                Drawer Demo
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