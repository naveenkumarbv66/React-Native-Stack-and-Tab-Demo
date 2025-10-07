import { StyleSheet, Text, View } from 'react-native'

const tabOneScreen = () => {
    return (
        <View style={styles.container}>
            <Text>tabOneScreen Screen</Text>
        </View>
    )
}

export default tabOneScreen

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