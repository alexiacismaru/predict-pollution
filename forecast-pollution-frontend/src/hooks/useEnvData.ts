import { useQuery } from '@tanstack/react-query'
import { getEnvData } from '../services/API.ts'
// import SecurityContext from '../context/SecurityContext.ts'
// import { useContext } from 'react'

export function useEnvData() {
    // const { isAuthenticated } = useContext(SecurityContext)

    const {
        isLoading: isDoingGet,
        isError: isErrorGet,
        data: envData,
    } = useQuery({
        queryKey: ['envData'],
        queryFn: () => getEnvData(),
        // enabled: isAuthenticated,
    })

    return {
        isLoading: isDoingGet,
        isError: isErrorGet,
        envData: envData || [],
    }
}
