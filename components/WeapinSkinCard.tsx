import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { WeaponSkin, WeaponsResponseById } from '@/interface'

const WeaponSkinCard = ({ skin, weapon }: { skin: WeaponSkin, weapon: WeaponsResponseById }) => {
    const sidearm = weapon.data.shopData?.categoryText === 'Sidearms'
    const melee = weapon.data.displayName === 'Melee'

    return (
        <div className='flex flex-col w-full bg-white-light rounded-[12px] overflow-hidden'>
            <div className='flex items-center gap-3 px-4 md:px-5 py-3'>
                <div className='p-1 rounded-full bg-white-lighter shrink-0'>
                    <Image
                        src={'/images/pistol.png'}
                        alt='pistol'
                        width={30}
                        height={30}
                        sizes='100vw'
                        className='object-cover object-center md:w-[30px] h-auto w-[25px]'
                    />
                </div>

                <span className='text-xs line-clamp-1 md:text-base'>{skin.displayName}</span>
            </div>
            <div className='w-full h-[150px] md:h-[250px] relative flex items-center justify-center bg-black overflow-hidden'>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #1A1A1A",
                    }}
                />

                <Image
                    src={skin.displayIcon || weapon.data.killStreamIcon}
                    alt={skin.displayName}
                    width={300}
                    height={300}
                    sizes='100vw'
                    className={`object-cover object-center md:w-[300px] h-auto w-[150px] relative ${sidearm && 'scale-70'} ${melee && 'scale-60'}`}
                />
            </div>
            <Button className='bg-white-light text-black rounded-t-none h-[45px] md:h-[54px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer max-md:!text-xs'>
                View
            </Button>
        </div>
    )
}

export default WeaponSkinCard
