import Weapons from '@/components/Weapons'
import React from 'react'

const page = () => {
    return (
        <div className='w-full relative flex flex-col md:max-w-7xl mx-auto px-5 md:px-6 py-20 md:gap-7 gap-5'>
            <h1 className='text-3xl md:text-4xl mt-10' id="hero">Weapons</h1>
            <Weapons />
        </div>
    )
}

export default page
