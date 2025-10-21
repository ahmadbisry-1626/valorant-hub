"use server"

import { AgentResponse, AgentResponseById, BuddiesResponse, BundlesResponse, BundlesResponseById, GearResponse, MapResponseById, MapsResponse, SpraysResponse, WeaponsResponse, WeaponsResponseById } from "@/interface"
import { axiosInstance } from "./client"

export const fetchGear = async (): Promise<GearResponse> => {
    try {
        const response = await axiosInstance.get('/gear')

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch gear data")
    }
}

export const fetchAgents = async (): Promise<AgentResponse> => {
    try {
        const response = await axiosInstance.get('/agents')

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch agents data")
    }
}

export const fetchAgentById = async (id: string): Promise<AgentResponseById> => {
    try {
        const response = await axiosInstance.get(`/agents/${id}`)

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch agent data by id")
    }
}

export const fetchWeapons = async (): Promise<WeaponsResponse> => {
    try {
        const response = await axiosInstance.get('/weapons')

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch weapons data")
    }
}

export const fetchWeaponById = async (id: string): Promise<WeaponsResponseById> => {
    try {
        const response = await axiosInstance.get(`/weapons/${id}`)

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch weapon data by id")
    }
}

export const fetchMaps = async (): Promise<MapsResponse> => {
    try {
        const response = await axiosInstance.get('/maps')

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch maps data")
    }
}

export const fetchMapById = async (id: string): Promise<MapResponseById> => {
    try {
        const response = await axiosInstance.get(`/maps/${id}`)

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch map data by id")
    }
}

export const fetchBundles = async (): Promise<BundlesResponse> => {
    try {
        const response = await axiosInstance.get('/bundles')

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch bundles data")
    }
}

export const fetchBuddies = async (): Promise<BuddiesResponse> => {
    try {
        const response = await axiosInstance.get('/buddies')

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch buddies data")
    }
}

export const fetchSprays = async (): Promise<SpraysResponse> => {
    try {
        const response = await axiosInstance.get('/sprays')

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch sprays data")
    }
}
