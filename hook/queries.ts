import { GearResponse } from "@/interface"
import { fetchGear } from "@/lib/actions"
import { useQuery } from "@tanstack/react-query"


export const useGear = () => {
    return useQuery<GearResponse, Error>({
        queryKey: ['gear'],
        queryFn: fetchGear,
        staleTime: 5 * 60 * 1000,
        retry: 1
    })
}
