import { create } from "zustand"


interface DropDownProps {
    isOpen: string
    setIsOpen: (status: string) => void
}

export const useDropDown = create<DropDownProps>((set) => ({
    isOpen: '',
    setIsOpen: (isOpen) => set({ isOpen })
}))
