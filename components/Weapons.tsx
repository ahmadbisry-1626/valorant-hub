"use client"

import { useWeapon } from '@/hook/queries'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Weapons = () => {
    const { data: weapons, isLoading, isError } = useWeapon()

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 w-full'>
            {isLoading ? (
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center col-span-3'>
                    <div className="loader" />
                </div>
            ) : (
                weapons?.data.map((weapon) => {
                    const sidearm = weapon.shopData?.categoryText === 'Sidearms'

                    return (

                        <div key={weapon.uuid} className='flex flex-col shadow-sm rounded-[12px] overflow-hidden w-full'>
                            <div className='w-full h-[150px] md:h-[200px] bg-black flex items-center justify-center overflow-hidden relative'>
                                <div
                                    className="absolute inset-0 z-0"
                                    style={{
                                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
                                    }}
                                />

                                <Image
                                    src={weapon.displayIcon}
                                    alt={weapon.displayName}
                                    width={300}
                                    height={300}
                                    sizes='100vw'
                                    className={`object-cover ${sidearm && 'scale-70'} relative`}
                                />
                            </div>
                            <div className='w-full px-4 md:px-5 py-2 flex flex-col gap-3 bg-white-light'>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base text-main'>{weapon.shopData?.categoryText || weapon.displayName}</span>
                                    <h2 className='text-lg md:text-xl'>{weapon.displayName}</h2>
                                </div>
                                <Button asChild className='w-full h-[45px] md:h-[54px] rounded-[12px] bg-black'>
                                    <Link href={`/weapons/${weapon.uuid}`} className='w-full'>
                                        View Details
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    )
                })
            )}

        </div>
    )
}

export default Weapons
