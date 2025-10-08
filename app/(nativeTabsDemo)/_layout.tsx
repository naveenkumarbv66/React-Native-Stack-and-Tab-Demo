import { NativeTabs, Icon, Label, Badge, VectorIcon } from 'expo-router/unstable-native-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { BadgeProvider, useBadge } from './BadgeContext';

function NativeTabsContent() {
    const { badgeCount } = useBadge();

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
                {badgeCount > 0 && <Badge>{badgeCount.toString()}</Badge>}
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}

export default function NativeTabsDemoLayout() {
    return (
        <BadgeProvider>
            <NativeTabsContent />
        </BadgeProvider>
    );
}
