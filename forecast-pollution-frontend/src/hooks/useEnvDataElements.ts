import { useQuery } from '@tanstack/react-query'
import { getEnvDataElement } from '../services/API.ts' 

export function useEnvDataElement(envDataElementId: string) { 
    const {
        isLoading: isDoingGet,
        isError: isErrorGet,
        data: envDataElement,
    } = useQuery({
        queryKey: ['envDataElement'],
        queryFn: () => getEnvDataElement(envDataElementId),
        // enabled: isAuthenticated(),
    }) 

    return {
        isLoading: isDoingGet,
        isError: isErrorGet,
        envDataElement: envDataElement || {}, 
    };
}
