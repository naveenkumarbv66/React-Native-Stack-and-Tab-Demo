import { StyleSheet, Text, View } from 'react-native'

const tabThreeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Tab three Screen : Not listed in the Tab rout but same floder it is there</Text>
        </View>
    )
}

export default tabThreeScreen

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