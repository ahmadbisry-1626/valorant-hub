"use client"

import { useMobileMenu } from '@/hook/store'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import Link from 'next/link';
import { Input } from './ui/input';
import { navLinks } from '@/constants';
import { BiSolidDownArrow } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const NavbarMobile = () => {
    const { isOpen, setIsOpen } = useMobileMenu()
    const [isDropdownOpen, setIsDropDownOpen] = useState('')
    const pathname = usePathname()

    return (
        <div className='md:hidden block'>
            <GiHamburgerMenu className='size-7 text-black cursor-pointer hover:text-main transition-all duration-300' onClick={() => setIsOpen(true)} />

            <div className={`absolute top-0 w-full h-screen bg-black left-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out px-5 py-5`}>
                <div className='flex flex-col gap-3 h-full pb-30'>
                    <div className='flex items-center justify-between'>
                        <Link href={'/'} className='text-xl md:text-2xl text-main' onClick={() => {
                            setIsOpen(false)
                            setIsDropDownOpen('')
                        }}>
                            ValorantHub
                        </Link>
                        <button className='px-4 py-2 bg-gray rounded-[8px] hover:bg-main transition-all duration-300 ease-in-out text-white cursor-pointer' onClick={() => {
                            setIsOpen(false)
                            setIsDropDownOpen('')
                        }}>
                            X
                        </button>
                    </div>

                    <div className='px-2 w-full h-[60px] flex items-center bg-gray rounded-[12px]'>
                        <Input className='input text-white placeholder:text-white' placeholder='Search...' />
                    </div>
                    <Separator className='bg-gray' />

                    <ScrollArea className='w-full h-full'>
                        <div className='flex flex-col gap-3'>
                            <Link href={'/agents'} className={`w-full px-5 py-3 hover:bg-main rounded-[12px] text-white transition-all duration-300 ease-in-out text-lg ${pathname === '/agents' && 'bg-main'}`} onClick={() => {
                                setIsOpen(false)
                                setIsDropDownOpen('')
                            }}>
                                Agents
                            </Link>

                            {navLinks.map((link) => {
                                const isActive = isDropdownOpen === link.name

                                return (
                                    <div className='flex flex-col gap-2' key={link.name}>
                                        <div className='w-full px-5 py-3 hover:bg-main rounded-[12px] transition-all duration-300 ease-in-out flex items-center justify-between group cursor-pointer' onClick={() => {
                                            if (isActive) {
                                                setIsDropDownOpen('')
                                            } else {
                                                setIsDropDownOpen(link.name)
                                            }
                                        }}>
                                            <span className='text-white text-lg'>
                                                {link.name}
                                            </span>

                                            <BiSolidDownArrow className='size-4 text-main group-hover:text-white transition-all duration-300 ease-in-out' />
                                        </div>

                                        {isActive && (
                                            <div className='flex flex-col gap-2'>
                                                {link.dropdown.map((item) => {
                                                    const isItemActive = pathname === item.path

                                                    return (
                                                        <Link
                                                            href={item.path}
                                                            className={`w-full px-5 py-3 hover:bg-main rounded-[12px] transition-all duration-300 ease-in-out group ${isItemActive && 'bg-main'}`}
                                                            key={item.name}
                                                            onClick={() => {
                                                                setIsOpen(false)
                                                                setIsDropDownOpen('')
                                                            }}
                                                        >
                                                            <span className={`text-gray-400 group-hover:text-white transition-all duration-300 text-lg ${isItemActive && 'text-white'}`}>
                                                                {item.name}
                                                            </span>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile
