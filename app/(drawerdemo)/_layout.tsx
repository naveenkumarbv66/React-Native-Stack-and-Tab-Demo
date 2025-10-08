import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                }}
            />
            <Drawer.Screen
                name="notifications"
                options={{
                    drawerLabel: 'Notifications',
                    title: 'Notifications',
                }}
            />
        </Drawer>
    );
}
