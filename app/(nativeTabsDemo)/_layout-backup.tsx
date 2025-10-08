import { NativeTabs, Label, Badge } from 'expo-router/unstable-native-tabs';

export default function NativeTabsDemoLayout() {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                <Label>Home</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="settings">
                <Label>Settings</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="profile">
                <Label>Profile</Label>
                <Badge>3</Badge>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
