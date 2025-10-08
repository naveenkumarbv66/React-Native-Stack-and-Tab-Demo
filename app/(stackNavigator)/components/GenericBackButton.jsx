import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native';

const GenericBackButton = ({ navigation, style, textStyle, iconColor = 'white' }) => {
    // Get the previous route name using useNavigationState
    const previousRouteName = useNavigationState(state => {
        const currentIndex = state.index;
        const routes = state.routes;
        
        if (currentIndex > 0) {
            const previousRoute = routes[currentIndex - 1];
            return previousRoute ? previousRoute.name : 'Back';
        }
        return 'Back';
    });

    // Only show on Android (iOS has default back button)
    if (Platform.OS !== 'android') {
        return null;
    }

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButtonContainer, style]}>
            <Ionicons 
                name="arrow-back" 
                size={24} 
                color={iconColor} 
                style={styles.backIcon} 
            />
            <Text style={[styles.backButtonText, textStyle]}>
                {previousRouteName}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -10,
        paddingRight: 10,
    },
    backIcon: {
        marginLeft: 24,
    },
    backButtonText: {
        marginHorizontal: 5,
        fontSize: 16,
        color: 'white',
    },
});

export default GenericBackButton;
