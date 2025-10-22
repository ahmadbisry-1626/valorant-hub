import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WeaponSection = () => {
    return (
        <div className='w-full pb-20 bg-black relative'>
            <Image
                src={'/images/abstract-triangle.png'}
                alt='abstract-triangle'
                width={220}
                height={220}
                sizes='100vw'
                className='absolute md:w-[220px] h-auto w-[200px] md:bottom-10 md:right-0 max-md:top-0 max-md:left-0 max-md:rotate-180'
            />

            <div className='flex flex-col gap-10 w-full max-w-7xl mx-auto px-5 md:px-6 items-center justify-center'>
                <div className='flex-col gap-5 w-full flex items-end z-10'>
                    <div className='relative z-10'>
                        <Image alt='tagline' src={'/images/tagline.png'} width={200} height={200} sizes='100vw' className='md:w-[200px] h-auto w-[180px]' />
                        <h2 className='absolute top-1/2 -translate-y-1/2 right-0 text-xl md:text-2xl text-white -translate-x-9'>WEAPON</h2>
                    </div>

                    <h1 className='text-4xl md:text-5xl text-right text-white leading-tight'>
                        Choose your <br /> Weapon
                    </h1>
                </div>

                <div className='flex max-md:flex-col-reverse gap-5 z-10'>
                    <Link href={'/weapons'} className='md:text-8xl text-5xl text-main hover:text-white transition-all duration-300 md:[writing-mode:vertical-rl] md:rotate-180 flex items-center justify-center'>
                        SEE MORE
                    </Link>
                    <Link href={'https://www.youtube.com/watch?v=sNHKU2Ggaks'} className='flex flex-col rounded-[12px] overflow-hidden hover:opacity-80 transition-all duration-300 relative'>
                        <div className='relative w-full md:h-[400px] h-[250px]'>
                            <video
                                src={'/videos/weapon.mp4'}
                                autoPlay
                                loop
                                muted
                                className='size-full object-cover'
                            />
                        </div>
                        <div className='py-6 px-5 md:px-6 bg-white flex flex-col z-10 relative'>
                            <span className='text-xl text-gray'>FireBlast98</span>
                            <h2 className='text-3xl md:text-4xl text-black max-w-md'>All Weapons Reload Animation</h2>
                        </div>
                        <div className='flex items-center gap-1 absolute bottom-4 md:bottom-6 right-4 md:right-6 z-10'>
                            <div className='size-3 md:size-4 bg-main' />
                            <div className='size-3 md:size-4 bg-main' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WeaponSection
