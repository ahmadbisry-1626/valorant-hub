import { AgentResponse, AgentResponseById, GearResponse, WeaponsResponse, WeaponsResponseById } from "@/interface"
import { fetchAgentById, fetchAgents, fetchGear, fetchWeaponById, fetchWeapons } from "@/lib/actions"
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

export const useWeapon = () => {
    return useQuery<WeaponsResponse, Error>({
        queryKey: ['weapons'],
        queryFn: fetchWeapons,
        staleTime: 5 * 60 * 1000,
        retry: 1
    })
}

export const useWeaponById = (id: string) => {
    return useQuery<WeaponsResponseById, Error>({
        queryKey: ['weapons', id],
        queryFn: () => fetchWeaponById(id),
        staleTime: 5 * 60 * 1000,
        retry: 1
    })
}
