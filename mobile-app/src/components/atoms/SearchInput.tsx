import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface SearchInputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChangeText,
    placeholder = 'Search for a city...',
    ...props
}) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            autoCapitalize="words"
            autoCorrect={false}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
