import { currency } from '@/constants'
import { MotionH1, MotionImage } from '@/lib/framer'
import Image from 'next/image'
import React from 'react'

const CurrencySection = () => {
    return (
        <div className='w-full bg-black relative pb-20'>
            <div className='w-full md:max-w-7xl mx-auto px-5 md:px-6 flex flex-col lg:gap-5 relative mt-32 md:mt-40 max-md:items-center'>
                <MotionImage
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 0.5,
                            ease: 'easeInOut',
                        }
                    }}
                    viewport={{ once: true }}
                    src={'/images/fade.png'}
                    alt='fade'
                    width={350}
                    height={350}
                    sizes='100vw'
                    className='absolute z-20 right-0 top-0 lg:-translate-y-52 md:-translate-y-35 -translate-y-20 h-auto lg:w-[350px] w-[250px] md:w-[300px] md:block hidden md:-translate-x-20'
                />

                <MotionH1
                    initial={{ y: -100 }}
                    whileInView={{
                        y: [-100, 10, 20, 0],
                        transition: {
                            delay: 0.1,
                            duration: 0.5,
                            ease: 'easeInOut',
                            times: [0, 0.6, 0.85, 1]
                        }
                    }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-4xl font-bold text-white mb-10 uppercase w-full z-30 max-md:text-right md:ml-20'>In-Game Currency</MotionH1>

                <div className='flex max-md:flex-col items-center gap-5'>
                    <div className='flex items-center gap-5 lg:gap-10 z-30 md:ml-20'>
                        {currency.map((curr, i) => (
                            <MotionImage
                                initial={{ x: -100 }}
                                whileInView={{
                                    x: [-100, 10, 20, 0],
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.5,
                                        ease: 'easeInOut',
                                        times: [0, 0.6, 0.85, 1]
                                    }
                                }}
                                viewport={{ once: true }}
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

                    <MotionImage
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 1,
                                duration: 0.5,
                                ease: 'easeInOut',
                            }
                        }}
                        viewport={{ once: true }}
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
