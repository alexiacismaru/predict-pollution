import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '../services/API.ts'
// import SecurityContext from '../context/SecurityContext.ts'
// import { useContext } from 'react'

export function useNotification() {
    // const { isAuthenticated } = useContext(SecurityContext)

    const {
        isLoading: isDoingGet,
        isError: isErrorGet,
        data: notification,
    } = useQuery({
        queryKey: ['notification'],
        queryFn: () => getNotifications(),
        // enabled: isAuthenticated,
    })

    return {
        isLoading: isDoingGet,
        isError: isErrorGet,
        notification: notification || [],
    }
}
