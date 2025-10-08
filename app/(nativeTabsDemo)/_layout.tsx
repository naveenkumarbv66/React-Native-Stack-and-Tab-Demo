import { NativeTabs, Icon, Label, Badge, VectorIcon } from 'expo-router/unstable-native-tabs';
import { MaterialIcons } from '@expo/vector-icons';

export default function NativeTabsDemoLayout() {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
                <Label>Home</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="settings">
                <Icon src={<VectorIcon family={MaterialIcons} name="settings" />} />
                <Label>Settings</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="profile">
                <Icon src={<VectorIcon family={MaterialIcons} name="person" />} />
                <Label>Profile</Label>
                <Badge>4</Badge>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
