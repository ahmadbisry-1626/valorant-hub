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
                <Link href={'/bundles'} className='absolute z-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group'>
                    <span className='group-hover:tracking-widest transition-all duration-300 ease-in-out md:text-[100px] text-5xl text-white'>
                        BUNDLE
                    </span>
                </Link>

                <div className='w-full h-[700px] bgblack triangle-left overflow-hidden relative z-10'>
                    <Image
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
                        <Image
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
