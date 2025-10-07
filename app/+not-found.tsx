import { Link, Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
    return (

        <View style={styles.container}>
            <Link href="/" style={{ color: 'red', fontSize: 20 }}> Oops! This screen doesn't exist. Go to home screen</Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});