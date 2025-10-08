import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const ProfileTab = () => {
    const userStats = [
        { label: 'Posts', value: '42' },
        { label: 'Followers', value: '1.2K' },
        { label: 'Following', value: '89' },
    ];

    const menuItems = [
        { title: 'Edit Profile', icon: '✏️' },
        { title: 'Account Settings', icon: '⚙️' },
        { title: 'Privacy & Security', icon: '🔒' },
        { title: 'Help & Support', icon: '❓' },
        { title: 'Logout', icon: '🚪', isDestructive: true },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {/* Profile Header */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>JD</Text>
                        </View>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.username}>@johndoe</Text>
                    <Text style={styles.bio}>Mobile Developer | React Native Enthusiast | Coffee Lover ☕</Text>
                </View>

                {/* Stats */}
                <View style={styles.statsContainer}>
                    {userStats.map((stat, index) => (
                        <View key={index} style={styles.statItem}>
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Menu Items */}
                <View style={styles.menuSection}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={[
                                styles.menuItem,
                                item.isDestructive && styles.destructiveItem
                            ]}
                        >
                            <Text style={styles.menuIcon}>{item.icon}</Text>
                            <Text style={[
                                styles.menuText,
                                item.isDestructive && styles.destructiveText
                            ]}>
                                {item.title}
                            </Text>
                            <Text style={styles.menuArrow}>›</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Recent Activity */}
                <View style={styles.activitySection}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                    <View style={styles.activityItem}>
                        <Text style={styles.activityIcon}>📱</Text>
                        <View style={styles.activityContent}>
                            <Text style={styles.activityTitle}>Updated app settings</Text>
                            <Text style={styles.activityTime}>2 hours ago</Text>
                        </View>
                    </View>
                    <View style={styles.activityItem}>
                        <Text style={styles.activityIcon}>🔔</Text>
                        <View style={styles.activityContent}>
                            <Text style={styles.activityTitle}>New notification received</Text>
                            <Text style={styles.activityTime}>5 hours ago</Text>
                        </View>
                    </View>
                    <View style={styles.activityItem}>
                        <Text style={styles.activityIcon}>👤</Text>
                        <View style={styles.activityContent}>
                            <Text style={styles.activityTitle}>Profile picture updated</Text>
                            <Text style={styles.activityTime}>1 day ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 20,
        paddingTop: 60,
    },
    profileHeader: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#FF3B30',
        borderRadius: 12,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    username: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    bio: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    menuSection: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    destructiveItem: {
        borderBottomWidth: 0,
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 15,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    destructiveText: {
        color: '#FF3B30',
    },
    menuArrow: {
        fontSize: 20,
        color: '#999',
    },
    activitySection: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    activityIcon: {
        fontSize: 20,
        marginRight: 15,
    },
    activityContent: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 2,
    },
    activityTime: {
        fontSize: 14,
        color: '#666',
    },
});
