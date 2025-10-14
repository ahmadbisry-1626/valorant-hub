"use server"

import { AgentResponse, AgentResponseById, GearResponse, WeaponsResponse, WeaponsResponseById } from "@/interface"
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
