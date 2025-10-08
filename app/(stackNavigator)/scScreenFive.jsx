import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import useGenericBackButton from './hooks/useGenericBackButton'

const scScreenFive = ({ navigation }) => {
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

    const callScreenSeven = () => {
        navigation.navigate('Screen Seven', {
            itemName: 'from Screen Five',
            itemId: 55,
        })
    }

    // Use the generic back button hook
    useGenericBackButton(navigation);

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
                    <TouchableOpacity onPress={callScreenSeven} style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>SC7</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, count]); // The dependency array ensures this runs when the navigation object or count changes.

    // Note: headerLeft is now handled by useGenericBackButton hook

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
        width: 200, // Increased width to accommodate the new button
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
})