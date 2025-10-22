import { currency } from '@/constants'
import Image from 'next/image'
import React from 'react'

const CurrencySection = () => {
    return (
        <div className='w-full bg-black relative pb-20'>
            <div className='w-full md:max-w-7xl mx-auto px-5 md:px-6 flex flex-col lg:gap-5 relative mt-32 md:mt-40 max-md:items-center'>
                <Image
                    src={'/images/fade.png'}
                    alt='fade'
                    width={350}
                    height={350}
                    sizes='100vw'
                    className='absolute z-20 right-0 top-0 lg:-translate-y-52 md:-translate-y-35 -translate-y-20 h-auto lg:w-[350px] w-[250px] md:w-[300px] md:block hidden md:-translate-x-20'
                />

                <h2 className='text-3xl md:text-4xl font-bold text-white mb-10 uppercase w-full z-30 max-md:text-right md:ml-20'>In-Game Currency</h2>

                <div className='flex max-md:flex-col items-center gap-5'>
                    <div className='flex items-center gap-5 lg:gap-10 z-30 md:ml-20'>
                        {currency.map((curr) => (
                            <Image
                                src={curr.imageUrl}
                                alt={curr.name}
                                width={120}
                                height={120}
                                sizes='100vw'
                                className='h-auto lg:w-[120] md:w-[100px] w-[80px] hover:scale-105 transition-all duration-300 ease-in-out'
                                key={curr.name}
                            />
                        ))}
                    </div>

                    <Image
                        src={'/images/fade.png'}
                        alt='fade'
                        width={300}
                        height={300}
                        sizes='100vw'
                        className=' md:hidden block -mb-20'
                    />
                </div>
            </div>
        </div>
    )
}

export default CurrencySection
