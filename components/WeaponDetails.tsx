"use client"

import { useWeaponById } from '@/hook/queries'
import React from 'react'
import Image from 'next/image';

const WeaponDetails = ({ id }: { id: string }) => {
    const { data: weapon, isLoading, isError } = useWeaponById(id)
    const sidearm = weapon?.data?.shopData?.categoryText === 'Sidearms'

    if (!weapon || !weapon.data && !isLoading) return

    return (
        <div className='w-full flex flex-col gap-5 md:gap-7 md:max-w-7xl mx-auto px-5 md:px-6'>
            <div className='w-full h-[150px] md:h-[200px] bg-black flex items-center justify-center overflow-hidden relative rounded-[12px]'>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
                    }}
                />

                <Image
                    src={weapon?.data.displayIcon}
                    alt={weapon?.data.displayName}
                    width={400}
                    height={400}
                    sizes='100vw'
                    className={`object-cover ${sidearm && 'scale-70'} relative`}
                />

            </div>
        </div>
    )
}

export default WeaponDetails
