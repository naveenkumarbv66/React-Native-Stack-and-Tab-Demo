import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useBadge } from './BadgeContext';

const HomeTab = () => {
    const { badgeCount, incrementBadge, decrementBadge, clearBadge } = useBadge();
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
                
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Dynamic Badge Demo</Text>
                    <Text style={styles.cardText}>Current badge count: {badgeCount.toString()}</Text>
                    <Text style={styles.cardText}>Try the badge controls in the Profile tab to see the badge update dynamically!</Text>
                    <View style={styles.badgeButtonsContainer}>
                        <TouchableOpacity style={styles.badgeButton} onPress={incrementBadge}>
                            <Text style={styles.badgeButtonText}>+1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.badgeButton} onPress={decrementBadge}>
                            <Text style={styles.badgeButtonText}>-1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.badgeButton, styles.clearButton]} onPress={clearBadge}>
                            <Text style={[styles.badgeButtonText, styles.clearButtonText]}>Clear</Text>
                        </TouchableOpacity>
                    </View>
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
    badgeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
    },
    badgeButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 6,
        minWidth: 50,
        alignItems: 'center',
    },
    badgeButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    clearButton: {
        backgroundColor: '#FF3B30',
    },
    clearButtonText: {
        color: 'white',
    },
});
