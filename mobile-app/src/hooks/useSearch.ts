import { useState, useEffect } from 'react';
import { searchCities } from '@/services/weatherService';
import { SearchResult } from '@/types/weather';

interface UseSearchReturn {
    query: string;
    setQuery: (query: string) => void;
    results: SearchResult[];
    isLoading: boolean;
    error: string | null;
}

/**
 * Custom hook for city search with debouncing
 * Automatically triggers API call 500ms after user stops typing
 */
export const useSearch = (): UseSearchReturn => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Debounce the search query
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    // Fetch results when debounced query changes
    useEffect(() => {
        const fetchCities = async () => {
            if (debouncedQuery.trim().length < 2) {
                setResults([]);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);
                const cities = await searchCities(debouncedQuery);
                setResults(cities);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : 'Failed to search cities'
                );
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCities();
    }, [debouncedQuery]);

    return {
        query,
        setQuery,
        results,
        isLoading,
        error,
    };
};
