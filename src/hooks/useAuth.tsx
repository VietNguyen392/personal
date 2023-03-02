
import { getUserProfile } from '../services/api'
import { useQuery } from '@tanstack/react-query'
export const useAuth = () => {
    const { data } = useQuery({ queryKey: ['get-profile'], queryFn: getUserProfile })
    return (
        {
            user: data?.data
        }
    )
}
