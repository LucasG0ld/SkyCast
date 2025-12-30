import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';
import { SearchInput } from '@/components/atoms/SearchInput';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder,
}) => {
    return (
        <View style={styles.container}>
            <Search color="#6B7280" size={20} style={styles.icon} />
            <SearchInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    icon: {
        marginRight: 8,
    },
});
