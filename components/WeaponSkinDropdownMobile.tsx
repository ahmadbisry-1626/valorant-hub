"use client"

import { useWeapon } from '@/hook/queries'
import { useDropDownMobile, useMobileMenu } from '@/hook/store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { ScrollArea } from './ui/scroll-area'
import { ImSpinner6 } from 'react-icons/im'

const WeaponSkinDropdownMobile = () => {
    const { isDropDownOpen, setIsDropDownOpen } = useDropDownMobile()
    const { setIsOpen } = useMobileMenu()
    const { data: weapon, isLoading } = useWeapon()
    const [isOpenWeapon, setIsOpenWeapon] = useState(false)
    const pathname = usePathname()

    return (
        isDropDownOpen === 'Collections' && (
            <div className='flex flex-col gap-2'>
                <button className='flex items-center justify-between px-5 py-3 w-full hover:bg-main rounded-[12px] transition-all duration-300 ease-in-out group cursor-pointer' onClick={() => setIsOpenWeapon(!isOpenWeapon)}>
                    <span className={`text-gray-400 ${isOpenWeapon && 'text-white'} text-lg group-hover:text-white transition-all duration-300`}>
                        Weapon Skins
                    </span>

                    <BiSolidDownArrow className={`size-4 text-gray-400 group-hover:text-white transition-all duration-300 ease-in-out ${isOpenWeapon && 'text-main'}`} />
                </button>

                {isOpenWeapon && (
                    <ScrollArea className='px-5 py-3 w-full h-[250px] rounded-[12px] bg-[#262626]'>
                        {isLoading ? (
                            <div className='w-full h-[250px] flex items-center justify-center'>
                                <ImSpinner6 className='size-7 text-main animate-spin' />
                            </div>
                        ) : (
                            <div className='flex flex-col gap-2'>
                                {weapon?.data.map((weapon) => {
                                    const isItemActive = pathname === `/weapons/weapon-skin/${weapon.uuid}`

                                    return (
                                        <Link
                                            href={`/weapons/weapon-skin/${weapon.uuid}`}
                                            className={`w-full px-5 py-3 hover:bg-main rounded-[12px] transition-all duration-300 ease-in-out group ${isItemActive && 'bg-main'}`}
                                            key={weapon.uuid}
                                            onClick={() => {
                                                setIsOpen(false)
                                                setIsOpenWeapon(false)
                                                setIsDropDownOpen('')
                                            }}
                                        >
                                            <span className={`text-gray-400 group-hover:text-white transition-all duration-300 text-base ${isItemActive && 'text-white'}`}>
                                                {weapon.displayName}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}

                    </ScrollArea>
                )}
            </div>
        )
    )
}

export default WeaponSkinDropdownMobile
