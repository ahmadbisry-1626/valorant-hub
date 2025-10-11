"use client"

import { navLinks } from '@/constants'
import { useDropDown } from '@/hook/store'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { isOpen, setIsOpen } = useDropDown()

    return (
        <nav className='fixed top-0 w-full z-50'>
            <div className='flex items-center justify-between md:max-w-7xl mx-auto px-5 md:px-6 py-5'>
                <h2>ValorantHub</h2>

                <div className="flex items-center gap-5">
                    <Link href="/agents">Agents</Link>

                    {navLinks.map((link) => {
                        const isActive = isOpen === link.name

                        return (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setIsOpen(link.name)}
                                onMouseLeave={() => setIsOpen('')}
                            >
                                <span className={`cursor-default rounded-[12px] px-4 py-2 ${isActive && 'bg-gray-300'} transition-all duration-300`}>{link.name}</span>

                                {isOpen === link.name && (
                                    <div className='absolute right-0 top-0 mt-5'>
                                        <div className="w-40 bg-red-500 rounded-md shadow-lg mt-6">
                                            <ul className="flex flex-col p-2">
                                                <li className="hover:bg-red-400 p-2 rounded">Option 1</li>
                                                <li className="hover:bg-red-400 p-2 rounded">Option 2</li>
                                                <li className="hover:bg-red-400 p-2 rounded">Option 3</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
