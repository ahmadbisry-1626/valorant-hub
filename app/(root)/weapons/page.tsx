import Weapons from '@/components/Weapons'
import React from 'react'

const page = () => {
    return (
        <div className='w-full relative flex flex-col items-center justify-center md:max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-32 md:gap-7 gap-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl w-full' id="hero">Weapons</h1>
            <Weapons />
        </div>
    )
}

export default page
