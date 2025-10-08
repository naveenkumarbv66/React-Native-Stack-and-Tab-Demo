import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Navigation Demos',
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="(nativeTabsDemo)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(tab)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(stack)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(link)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(dynamicRoutes)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(customStack)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(stackNavigator)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(drawerdemo)"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    );
}
