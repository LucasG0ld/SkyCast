import { View, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>City Search</Text>
            <Text style={styles.subtitle}>
                Search for cities to add to your weather dashboard
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
    },
});
