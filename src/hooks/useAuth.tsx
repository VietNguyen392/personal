
import { getUserProfile } from '../services/api'
import { useQuery } from '@tanstack/react-query'
export const useAuth = () => {
    const { data } = useQuery({ queryKey: ['get-profile'], queryFn: getUserProfile })
    console.log(data)
    return (
        {
            user: data?.data
        }
    )
}
