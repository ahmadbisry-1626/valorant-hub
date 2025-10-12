import { create } from "zustand"

interface DropDownProps {
    isDropDownOpen: string
    setIsDropDownOpen: (status: string) => void
}

interface MobileMenuProps {
    isOpen: boolean
    setIsOpen: (status: boolean) => void
}

export const useMobileMenu = create<MobileMenuProps>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen })
}))

export const useDropDown = create<DropDownProps>((set) => ({
    isDropDownOpen: '',
    setIsDropDownOpen: (isDropDownOpen) => set({ isDropDownOpen })
}))
