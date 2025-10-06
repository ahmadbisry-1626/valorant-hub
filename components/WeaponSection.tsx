import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WeaponSection = () => {
    return (
        <div className='w-full pb-20 bg-black'>
            <div className='flex flex-col gap-10 w-full max-w-7xl mx-auto px-5 md:px-6 items-center justify-center'>
                <div className='flex-col gap-5 w-full flex items-end'>
                    <div className='relative z-10'>
                        <Image alt='tagline' src={'/images/tagline.png'} width={200} height={200} sizes='100vw' className='' />
                        <h2 className='absolute top-1/2 -translate-y-1/2 right-0 text-2xl text-white -translate-x-9'>WEAPON</h2>
                    </div>

                    <h1 className='text-5xl text-right text-white leading-tight'>
                        Choose your <br /> Weapon
                    </h1>
                </div>

                <div className='flex gap-5'>
                    <Link href={'/'} className='text-8xl text-main hover:text-white transition-all duration-300 [writing-mode:vertical-rl] rotate-180 flex items-center justify-center'>
                        SEE MORE
                    </Link>
                    <Link href={'https://www.youtube.com/watch?v=sNHKU2Ggaks'} className='flex flex-col rounded-[12px] overflow-hidden hover:opacity-80 transition-all duration-300 relative'>
                        <video
                            src={'/videos/weapon.mp4'}
                            autoPlay
                            loop
                            muted
                            className='w-full h-[400px]'
                        />
                        <div className='py-6 px-5 md:px-6 bg-white flex flex-col'>
                            <span className='text-xl text-gray'>FireBlast98</span>
                            <h2 className='text-4xl text-black max-w-md'>All Weapons Reload Animation</h2>
                        </div>
                        <div className='flex items-center gap-1 absolute bottom-5 md:bottom-6 right-5 md:right-6'>
                            <div className='size-4 bg-main' />
                            <div className='size-4 bg-main' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WeaponSection
