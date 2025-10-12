import { create } from "zustand"


interface DropDownProps {
    isDropDownOpen: string
    setIsDropDownOpen: (status: string) => void
}

export const useDropDown = create<DropDownProps>((set) => ({
    isDropDownOpen: '',
    setIsDropDownOpen: (isDropDownOpen) => set({ isDropDownOpen })
}))
