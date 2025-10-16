"use client"

import { useWeapon } from '@/hook/queries'
import { usePathname } from 'next/navigation'
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import React, { useState } from 'react'
import { useDropDown } from '@/hook/store';
import Link from 'next/link';
import { ImSpinner6 } from "react-icons/im";

const WeaponSkinDropdown = () => {
    const { data: weapon, isLoading, isError } = useWeapon()
    const { isDropDownOpen } = useDropDown()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        isDropDownOpen === 'Collections' && (
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={`text-right text-md w-full px-3 py-1 rounded-[8px] hover:bg-main cursor-pointer flex items-center justify-end gap-1 group`}>

                <div className={`w-[300px] absolute top-0 z-20 bg-transparent left-0 px-4 -translate-x-74 ${isOpen ? 'opacity-100' : 'opacity-0'} rounded-[12px]flex flex-col`}>
                    {isLoading ? (
                        <div className='w-full h-[300px] flex items-center justify-center bg-white-light rounded-[12px]'>
                            <ImSpinner6 className='size-7 text-main animate-spin' />
                        </div>
                    ) : (
                        <div className='bg-white-light rounded-[12px] grid grid-cols-2 gap-2'>
                            {weapon?.data.map((weapon) => {
                                const isItemActive = pathname === `/weapons/weapon-skin/${weapon.uuid}`

                                return (
                                    <Link
                                        href={`/weapons/weapon-skin/${weapon.uuid}`}
                                        key={weapon.uuid}
                                        className={`text-right text-md hover:text-white w-full px-3 py-1 rounded-[8px] hover:bg-main ${isItemActive && 'bg-main text-white'}`}>
                                        {weapon.displayName}
                                    </Link>
                                )
                            })}
                        </div>
                    )}

                </div>

                <BiSolidLeftArrow className={`size-3 ${isOpen ? 'text-white' : 'text-black'}`} />
                <span className={`${isOpen ? 'text-white' : 'text-black'}`}>
                    Weapon Skins
                </span>
            </div>
        )
    )
}

export default WeaponSkinDropdown
