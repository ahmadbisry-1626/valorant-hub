import { MotionImage, MotionLink } from '@/lib/framer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BundleSection = () => {
    return (
        <div className="w-full relative bg-black">
            <Image
                src={'/images/rectangle-bundle.svg'}
                alt='bundle rectangle'
                width={2000}
                height={2000}
                sizes='100vw'
                className='absolute top-0 z-50 md:-translate-y-12 -translate-y-10 select-none'
            />

            <div className='w-full relative md:mt-10 lg:mt-20 xl:mt-30'>
                <MotionLink
                    initial={{ scale: 0.5, }}
                    whileInView={{
                        scale: [0.5, 1.1, 0.95, 1],
                        transition: {
                            delay: 0.1,
                            duration: 0.5,
                            ease: 'easeOut',
                            times: [0, 0.6, 0.85, 1]
                        }
                    }}
                    viewport={{ once: true }}
                    href={'/bundles'} className='absolute z-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group'>
                    <span className='group-hover:tracking-widest transition-all duration-300 ease-in-out md:text-[100px] text-5xl text-white'>
                        BUNDLE
                    </span>
                </MotionLink>

                <div className='w-full h-[700px] bgblack triangle-left overflow-hidden relative z-10'>
                    <MotionImage
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 0.2,
                                duration: 0.5,
                                ease: 'easeInOut',
                            }
                        }}
                        viewport={{ once: true }}
                        src={'/images/bundle-1.png'}
                        alt='bundle rectangle'
                        width={2000}
                        height={2000}
                        sizes='100vw'
                        className='object-cover size-full scale-x-[-1] opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out'
                    />
                </div>
                <div className='absolute top-0 w-full'>
                    <div className='w-full h-[700px] bg-black triangle-right overflow-hidden'>
                        <MotionImage
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }
                            }}
                            viewport={{ once: true }}
                            src={'/images/bundle-2.png'}
                            alt='bundle rectangle'
                            width={2000}
                            height={2000}
                            sizes='100vw'
                            className='object-cover size-full opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundleSection
