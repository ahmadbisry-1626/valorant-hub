import { create } from "zustand"

interface DropDownProps {
    isDropDownOpen: string
    setIsDropDownOpen: (status: string) => void
}

interface MobileMenuProps {
    isOpen: boolean
    setIsOpen: (status: boolean) => void
}

interface PaginationProps {
    pageParam: number
    setPageParam: (page: number) => void
}

interface QuickLinksProps {
    isQuickLinksOpen: string,
    setQuickLinksOpen: (status: string) => void
}

export const useQuickLinks = create<QuickLinksProps>((set) => ({
    isQuickLinksOpen: 'Gameplay',
    setQuickLinksOpen: (isQuickLinksOpen) => set({ isQuickLinksOpen })
}))

export const usePagination = create<PaginationProps>((set) => ({
    pageParam: 1,
    setPageParam: (page) => set({ pageParam: page })
}))

export const useMobileMenu = create<MobileMenuProps>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen })
}))

export const useDropDown = create<DropDownProps>((set) => ({
    isDropDownOpen: '',
    setIsDropDownOpen: (isDropDownOpen) => set({ isDropDownOpen })
}))

export const useDropDownMobile = create<DropDownProps>((set) => ({
    isDropDownOpen: '',
    setIsDropDownOpen: (isDropDownOpen) => set({ isDropDownOpen })
}))
