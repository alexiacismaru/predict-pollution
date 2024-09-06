import { useQuery } from '@tanstack/react-query'
import { getPredictedData } from '../services/API.ts'
// import SecurityContext from '../context/SecurityContext.ts'
// import { useContext } from 'react'

export function usePredictions() {
    // const { isAuthenticated } = useContext(SecurityContext)

    const {
        isLoading: isDoingGet,
        isError: isErrorGet,
        data: predictions,
    } = useQuery({
        queryKey: ['predictions'],
        queryFn: () => getPredictedData(),
        // enabled: isAuthenticated,
    })

    return {
        isLoadingPredictions: isDoingGet,
        isErrorPredictions: isErrorGet,
        predictions: predictions || [],
    }
}
