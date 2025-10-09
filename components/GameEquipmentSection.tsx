"use client"

import { useGear } from '@/hook/queries'
import Image from 'next/image'
import React from 'react'

const GameEquipmentSection = () => {
    const { data: Gear, isLoading, isError } = useGear()

    console.log(Gear)

    return (
        <div className='relative w-full bg-main mask-clip-path-gameEQ h-[400px] top-0 pt-10'>

            <div className='w-full max-w-7xl mx-auto px-5 md:px-6 relative flex items-center'>
                {Gear?.data.map((gear, i) => {
                    const size = 200 - i * 40

                    return (
                        <div className='flex items-center justify-center py-5 px-10 border-l-2 group relative' key={gear.uuid}>
                            <Image
                                src={gear.displayIcon}
                                alt={gear.displayName}
                                width={size}
                                height={size}
                                sizes='100vw'
                                className={`group-hover:translate-y-full group-hover:scale-20 transition-all duration-300 ease-in-out`}
                            />
                            <span className='absolute top-1/2 -translate-y-1/2 text-justify break-normal text-2xl text-white group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'>
                                {gear.displayName}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GameEquipmentSection
