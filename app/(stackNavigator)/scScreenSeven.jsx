import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';
import useGenericBackButton from './hooks/useGenericBackButton';

const scScreenSeven = ({ navigation }) => {
    const [eventLog, setEventLog] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [canGoBack, setCanGoBack] = useState(false);
    const scrollViewRef = useRef(null);

    // Use the generic back button hook
    useGenericBackButton(navigation);

    // Helper function to add events to log
    const addToLog = (eventType, details = '') => {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] ${eventType}${details ? `: ${details}` : ''}`;
        
        setEventLog(prev => {
            const newLog = [...prev, logEntry];
            // Keep only last 20 entries to prevent memory issues
            return newLog.slice(-20);
        });
        
        // Auto-scroll to bottom
        setTimeout(() => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd({ animated: true });
            }
        }, 200);
    };

    // Navigation event listeners
    useEffect(() => {
        // Focus event - when screen comes into focus
        const unsubscribeFocus = navigation.addListener('focus', () => {
            setIsFocused(true);
            addToLog('FOCUS', 'Screen is now focused');
        });

        // Blur event - when screen goes out of focus
        const unsubscribeBlur = navigation.addListener('blur', () => {
            setIsFocused(false);
            addToLog('BLUR', 'Screen is now blurred');
        });

        // BeforeRemove event - before screen is removed from stack
        const unsubscribeBeforeRemove = navigation.addListener('beforeRemove', (e) => {
            // Prevent default behavior of leaving the screen
            e.preventDefault();

            // Show confirmation dialog
            Alert.alert(
                'Discard changes?',
                'You have unsaved changes. Are you sure you want to go back?',
                [
                    { text: "Don't leave", style: 'cancel', onPress: () => {} },
                    {
                        text: 'Discard',
                        style: 'destructive',
                        // If the user confirmed, then we dispatch the action we blocked earlier
                        // This will continue the action that had been blocked
                        onPress: () => navigation.dispatch(e.data.action),
                    },
                ]
            );
        });

        // State event - when navigation state changes
        const unsubscribeState = navigation.addListener('state', (e) => {
            addToLog('STATE_CHANGE', `Navigation state updated`);
            setCanGoBack(navigation.canGoBack());
        });

        // Initial state
        setIsFocused(true);
        setCanGoBack(navigation.canGoBack());
        addToLog('MOUNT', 'Screen mounted and listeners attached');
        
        // Add some initial test events to demonstrate scrolling
        setTimeout(() => {
            addToLog('TEST', 'This is a test event to demonstrate scrolling');
            addToLog('TEST', 'Scroll down to see more events');
            addToLog('TEST', 'Navigation events will appear here in real-time');
            addToLog('TEST', 'Try navigating to other screens to see events');
            addToLog('TEST', 'The log will auto-scroll to show latest events');
        }, 500);

        // Cleanup function
        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
            unsubscribeBeforeRemove();
            unsubscribeState();
            addToLog('UNMOUNT', 'Screen unmounted and listeners removed');
        };
    }, [navigation]);

    // Navigation actions for testing
    const navigateToScreenThree = () => {
        addToLog('NAVIGATE', 'Navigating to Screen Three');
        navigation.navigate('Screen Three', {
            itemName: 'from Screen Seven',
            itemId: 7,
        });
    };

    const pushScreenFour = () => {
        addToLog('PUSH', 'Pushing Screen Four');
        navigation.push('Screen Four', {
            itemName: 'from Screen Seven with push',
            itemId: 77,
        });
    };

    const replaceWithScreenFive = () => {
        addToLog('REPLACE', 'Replacing with Screen Five');
        navigation.replace('Screen Five', {
            itemName: 'from Screen Seven with replace',
            itemId: 777,
        });
    };

    const goBack = () => {
        addToLog('GO_BACK', 'Going back');
        navigation.goBack();
    };

    const popToTop = () => {
        addToLog('POP_TO_TOP', 'Popping to top');
        navigation.popToTop();
    };

    const clearLog = () => {
        setEventLog([]);
        addToLog('CLEAR', 'Event log cleared');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigation Events Demo</Text>
            
            {/* Status indicators */}
            <View style={styles.statusContainer}>
                <Text style={[styles.statusText, { color: isFocused ? 'green' : 'red' }]}>
                    Status: {isFocused ? 'FOCUSED' : 'BLURRED'}
                </Text>
                <Text style={styles.statusText}>
                    Can Go Back: {canGoBack ? 'YES' : 'NO'}
                </Text>
            </View>

            {/* Navigation buttons */}
            <View style={styles.buttonContainer}>
                <Button title="Navigate to Screen 3" onPress={navigateToScreenThree} />
                <Button title="Push Screen 4" onPress={pushScreenFour} />
                <Button title="Replace with Screen 5" onPress={replaceWithScreenFive} />
                <Button title="Go Back" onPress={goBack} disabled={!canGoBack} />
                <Button title="Pop to Top" onPress={popToTop} />
            </View>

            {/* Event log */}
            <View style={styles.logContainer}>
                <View style={styles.logHeader}>
                    <Text style={styles.logTitle}>Navigation Events Log</Text>
                    <Button title="Clear" onPress={clearLog} />
                </View>
                
                <ScrollView 
                    ref={scrollViewRef}
                    style={styles.logScrollView}
                    contentContainerStyle={styles.logContentContainer}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled={true}
                >
                    {eventLog.map((log, index) => (
                        <Text key={index} style={styles.logEntry}>
                            {log}
                        </Text>
                    ))}
                    {eventLog.length === 0 && (
                        <Text style={styles.emptyLog}>No events logged yet...</Text>
                    )}
                    {/* Add some padding at the bottom to ensure scrolling works */}
                    <View style={{ height: 20 }} />
                </ScrollView>
            </View>

            {/* Instructions */}
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>Instructions:</Text>
                <Text style={styles.instructionsText}>
                    • Use navigation buttons to trigger events{'\n'}
                    • Switch between screens to see focus/blur events{'\n'}
                    • Try to go back to see beforeRemove event{'\n'}
                    • Watch the log for real-time event tracking
                </Text>
            </View>
        </View>
    );
};

export default scScreenSeven;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    statusContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    statusText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    buttonContainer: {
        marginBottom: 16,
    },
    logContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    logHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    logTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    logScrollView: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        borderRadius: 4,
    },
    logContentContainer: {
        padding: 8,
        flexGrow: 1,
    },
    logEntry: {
        fontSize: 12,
        fontFamily: 'monospace',
        color: '#333',
        marginBottom: 2,
        lineHeight: 16,
    },
    emptyLog: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
    },
    instructionsContainer: {
        backgroundColor: '#e3f2fd',
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#2196f3',
    },
    instructionsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1976d2',
        marginBottom: 8,
    },
    instructionsText: {
        fontSize: 14,
        color: '#1976d2',
        lineHeight: 20,
    },
});
