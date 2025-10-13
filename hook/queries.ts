import { AgentResponse, AgentResponseById, GearResponse } from "@/interface"
import { fetchAgentById, fetchAgents, fetchGear } from "@/lib/actions"
import { useQuery } from "@tanstack/react-query"


export const useGear = () => {
    return useQuery<GearResponse, Error>({
        queryKey: ['gear'],
        queryFn: fetchGear,
        staleTime: 5 * 60 * 1000,
        retry: 1
    })
}

export const useAgent = () => {
    return useQuery<AgentResponse, Error>({
        queryKey: ['agents'],
        queryFn: fetchAgents,
        staleTime: 5 * 60 * 1000,
        retry: 1
    })
}

export const useAgentById = (id: string) => {
    return useQuery<AgentResponseById, Error>({
        queryKey: ['agents', id],
        queryFn: () => fetchAgentById(id),
        staleTime: 5 * 60 * 1000,
        retry: 1
    })
}
