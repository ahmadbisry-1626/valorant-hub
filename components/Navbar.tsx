"use client"

import React, { useEffect, useState } from 'react'
import NavbarLarge from './NavbarLarge'
import { useDropDown } from '@/hook/store'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
    const { setIsDropDownOpen } = useDropDown()
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeroSection, setIsHeroSection] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                    setIsDropDownOpen('');
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(currentScrollY);

                if (currentScrollY > document.getElementById('hero')?.offsetHeight!) {
                    setIsHeroSection(false);
                } else {
                    setIsHeroSection(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 w-full z-50 max-md:bg-white ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'} ${!isHeroSection && 'shadow-sm bg-white'} transition-all duration-300 ease-in-out`}>
            <div className='flex items-center justify-between md:max-w-7xl mx-auto px-5 md:px-6 py-4'>
                <h2 className='text-xl md:text-2xl text-main'>ValorantHub</h2>

                <NavbarLarge />
                {/* <NavbarMobile /> */}
            </div>
        </nav>
    )
}

export default Navbar
