"use client"

import { footerInfo, navLinks } from '@/constants'
import { useQuickLinks } from '@/hook/store'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const { isQuickLinksOpen, setQuickLinksOpen } = useQuickLinks()
    const pathname = usePathname()

    return (
        <div className='bg-black relative w-full overflow-hidden'>
            <div className='flex items-center justify-center flex-col md:gap-10 gap-5 w-full md:max-w-7xl md:px-6 px-5 pt-10 md:pt-20 md:pb-10 pb-5 mx-auto'>
                <div className='flex items-center gap-3 md:gap-5 w-full flex-wrap'>
                    {navLinks.map((link) => {
                        const isActive = isQuickLinksOpen === link.name

                        return (
                            <button key={link.name} onClick={() => setQuickLinksOpen(link.name)} className={`text-gray text-lg md:text-xl cursor-pointer border border-gray px-4 py-2 rounded-[12px] ${isActive && 'bg-main text-white border-main'} hover:bg-main hover:text-white hover:border-main`}>
                                {link.name}
                            </button>
                        )
                    })}
                    <Link href={'/agents'} className={`text-gray text-lg md:text-xl cursor-pointer border border-gray px-4 py-2 rounded-[12px] hover:bg-main hover:text-white hover:border-main`} onClick={() => setQuickLinksOpen('Gameplay')}>
                        Agents
                    </Link>
                </div>

                <div className='flex max-md:flex-col md:items-start gap-5 w-full max-md:h-[400px]'>
                    <div className='flex flex-col gap-3 w-full'>
                        <h2 className='text-base md:text-lg text-gray'>
                            Quick links
                        </h2>
                        <Separator className='bg-gray' />
                        <div className='flex flex-col gap-2 mt-3'>
                            {navLinks.map((link) => (
                                link.dropdown.map((subLink) => {
                                    const isActive = pathname === subLink.path

                                    return (
                                        <Link href={subLink.path} key={subLink.name} className={`text-3xl md:text-4xl text-white ${isQuickLinksOpen === link.name ? 'block' : 'hidden pointer-events-none'} w-max ${isActive && '!text-main'} hover:text-main`}>
                                            {subLink.name}
                                        </Link>
                                    )
                                })
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <h2 className='text-base md:text-lg text-gray'>
                            Info
                        </h2>
                        <Separator className='bg-gray' />
                        <div className='flex flex-col gap-2'>
                            {footerInfo.map((info) => (
                                <Link href={info.path} key={info.name} className='text-base md:text-xl text-white capitalize w-max hover:text-main'>
                                    {info.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full md:mt-20 flex items-center md:justify-between max-md:flex-col max-md:gap-3'>
                    <p className='text-gray text-xs lg:text-base'>&copy; 2025 ValorantHub. All rights reserved.</p>

                    <div className='flex items-center gap-3 md:gap-5'>
                        <span className='text-gray text-xs lg:text-base hover:text-white cursor-pointer'>Cookie Policy</span>
                        <span className='text-gray text-xs lg:text-base hover:text-white cursor-pointer'>Privacy Policy</span>
                        <span className='text-gray text-xs lg:text-base hover:text-white cursor-pointer'>Terms of Service</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
