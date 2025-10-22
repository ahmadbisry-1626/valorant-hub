"use client"

import { navLinks } from '@/constants'
import { useDropDown } from '@/hook/store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import WeaponSkinDropdown from './WeaponSkinDropdown'

const NavbarLarge = () => {
    const { isDropDownOpen, setIsDropDownOpen } = useDropDown()
    const pathname = usePathname()

    return (
        <div className="md:flex items-center gap-2 hidden">
            <Link href="/agents" className={`px-4 py-2 text-md hover:bg-[#F2F2F2] rounded-[8px] ${pathname === '/agents' && 'bg-main text-white hover:bg-main'}`}>
                Agents
            </Link>

            {navLinks.map((link) => {
                const isActive = isDropDownOpen === link.name

                return (
                    <div
                        key={link.name}
                        className="relative group"
                        onMouseEnter={() => setIsDropDownOpen(link.name)}
                        onMouseLeave={() => setIsDropDownOpen('')}
                    >
                        <div className={`flex items-center gap-2 cursor-pointer rounded-[8px] group px-4 py-2 ${isActive && 'bg-[#F2F2F2]'}`}>
                            <span className={`text-md`}>
                                {link.name}
                            </span>
                            <BiSolidDownArrow className='size-3 text-main' />
                        </div>

                        {isActive && (
                            <div className='absolute right-0 top-0 mt-7'>
                                <div className="bg-[#F2F2F2] rounded-[8px] flex flex-col gap-1 mt-6 relative py-3 items-end w-[170px] border">
                                    <div className='w-full h-[5px] bg-black absolute top-0 right-0' />
                                    <WeaponSkinDropdown />

                                    {link.dropdown.map((item) => {
                                        const isItemActive = pathname === item.path

                                        return (
                                            <Link
                                                href={item.path}
                                                key={item.name}
                                                className={`text-right text-md hover:text-white w-full px-3 py-1 hover:bg-main ${isItemActive && 'bg-main text-white'}`}>
                                                {item.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
            )}
        </div>
    )
}

export default NavbarLarge
