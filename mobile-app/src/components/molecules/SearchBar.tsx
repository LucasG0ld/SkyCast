import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';
import { SearchInput } from '@/components/atoms/SearchInput';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder,
    onFocus,
    onBlur,
}) => {
    return (
        <View style={styles.container}>
            <Search color="#6B7280" size={20} style={styles.icon} />
            <SearchInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 14,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    icon: {
        marginRight: 8,
    },
});
