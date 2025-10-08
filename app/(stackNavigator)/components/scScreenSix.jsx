import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo
import { useNavigationState } from '@react-navigation/native';
import React from 'react'

const scScreenSix = ({ navigation }) => {
    // Use React.useState to create a state for the count.
    const [count, setCount] = React.useState(0);

    // Define the functions that will update the count.
    const incrementCount = () => setCount((c) => c + 1);
    const decrementCount = () => setCount((c) => c - 1);
    const resetCount = () => setCount(0);
    const callScreenThree = () => {
        navigation.navigate('Screen Three', {
            itemName: 'from Screen Five',
            itemId: 22,
        })
    }

    // Use useNavigationState hook to get the navigation state.
    // We use a selector function to pick out the previous route name.
    const previousRouteName = useNavigationState(state => {
        // Get the current route index
        const currentIndex = state.index;
        const routes = state.routes;

        // If we're not on the first screen, get the previous route
        if (currentIndex > 0) {
            const previousRoute = routes[currentIndex - 1];
            return previousRoute ? previousRoute.name : 'Back';
        }

        // If we're on the first screen, return 'Back' as fallback
        return 'Back';
    });

    // Use React.useLayoutEffect to set the header options after the component has rendered.
    // This hook ensures the header is updated with the current state.
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerButtonContainer}>
                    <TouchableOpacity onPress={incrementCount} style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>+1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={decrementCount} style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={resetCount} style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={callScreenThree} style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>SC3</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, previousRouteName]); // The dependency array ensures this runs when the navigation object changes.

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // Set the headerLeft option only on Android.
            headerLeft: () =>
                Platform.OS === 'android' ? (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButtonContainer}>
                        <Ionicons name="arrow-back" size={24} color="white" style={{ marginLeft: 24 }} />
                        <Text style={styles.backButtonText}>{previousRouteName}</Text>
                    </TouchableOpacity>
                ) : undefined, // Keep default iOS behavior
        });
    }, [navigation, previousRouteName]);

    return (
        <View style={styles.container}>
            <Text>scScreen Five</Text>
            <Text style={styles.countText}>Count: {count}</Text>
        </View>
    )
}

export default scScreenFive

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
    },
    headerButtonContainer: {
        flexDirection: 'row',
        // Use 'space-between' to distribute space evenly, pushing the buttons apart.
        justifyContent: 'space-between',
        width: 150, // Set a fixed width for the button container.
    },
    headerButton: {
        // Style the button's touchable area.
        paddingHorizontal: 8,
    },
    headerButtonText: {
        // Customize the text inside the button.
        fontSize: 16,
        color: '#e4FFFFFF', // Standard iOS blue color.
        fontWeight: '600', // Matches native bold text for buttons.
    },
    countText: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -10, // Adjust this value to align the button correctly.
        paddingRight: 10,
    },
    backButtonText: {
        marginHorizontal: 5,
        fontSize: 16,
        color: 'white',
    },
})