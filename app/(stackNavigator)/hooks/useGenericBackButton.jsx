import { useLayoutEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';
import GenericBackButton from '../components/GenericBackButton';

/**
 * Custom hook to set up a generic back button with previous screen name
 * @param {Object} navigation - Navigation object from React Navigation
 * @param {Object} options - Optional configuration
 * @param {Object} options.style - Custom styles for the back button container
 * @param {Object} options.textStyle - Custom styles for the back button text
 * @param {string} options.iconColor - Color for the back arrow icon
 */
const useGenericBackButton = (navigation, options = {}) => {
    const { style, textStyle, iconColor } = options;
    
    // Get the previous route name
    const previousRouteName = useNavigationState(state => {
        const currentIndex = state.index;
        const routes = state.routes;
        
        if (currentIndex > 0) {
            const previousRoute = routes[currentIndex - 1];
            return previousRoute ? previousRoute.name : 'Back';
        }
        return 'Back';
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <GenericBackButton
                    navigation={navigation}
                    style={style}
                    textStyle={textStyle}
                    iconColor={iconColor}
                />
            ),
        });
    }, [navigation, previousRouteName, style, textStyle, iconColor]);
};

export default useGenericBackButton;
