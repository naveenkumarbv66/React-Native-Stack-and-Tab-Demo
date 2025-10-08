import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeTab = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to Native Tabs Demo</Text>
                <Text style={styles.subtitle}>Home Tab</Text>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Features</Text>
                    <Text style={styles.cardText}>• Native tab bar with system styling</Text>
                    <Text style={styles.cardText}>• SF Symbols icons on iOS</Text>
                    <Text style={styles.cardText}>• Custom drawables on Android</Text>
                    <Text style={styles.cardText}>• Badge support for notifications</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Navigation</Text>
                    <Text style={styles.cardText}>Tap on the tabs below to navigate between different sections of the app.</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 5,
    },
});
