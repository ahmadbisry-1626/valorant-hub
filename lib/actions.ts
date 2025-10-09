"use server"

import { GearResponse } from "@/interface"
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
