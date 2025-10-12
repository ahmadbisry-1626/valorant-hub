import Image from 'next/image'
import React from 'react'

const AbstractImage = ({ path, width, height, className }: { path: string, width: number, height: number, className: string }) => {
    return (
        <Image
            src={path}
            alt='abstract object'
            width={width}
            height={height}
            sizes='100vw'
            className={className}
        />
    )
}

const HeroSection = () => {
    return (
        <div
            className='w-full min-h-screen flex items-center justify-center relative'
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
                    backgroundSize: "32px 32px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
                    maskImage:
                        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
                }}
            />

            <div className='absolute md:bottom-32 bottom-20 md:left-80 left-32 flex items-center gap-1'>
                <div className='md:size-3 size-2 bg-main' />
                <div className='md:size-3 size-2 bg-main' />

            </div>
            <div className='absolute md:bottom-20 bottom-10 md:left-72 left-20 size-5 bg-main' />
            <AbstractImage
                path='/images/abstract-1.png'
                width={70}
                height={70}
                className='absolute bottom-20 md:bottom-40 md:left-20 left-10'
            />
            <div className='absolute lg:top-24 top-10 lg:left-60 md:left-32 left-10'>
                <div className='size-4 md:size-5 bg-main lg:-translate-x-40' />
                <AbstractImage
                    path='/images/glass.png'
                    width={200}
                    height={200}
                    className='md:w-[200px] md:h-[180px] w-[150px] h-[130px]'
                />
            </div>
            <AbstractImage
                path='/images/abstract-2.png'
                width={80}
                height={80}
                className='absolute lg:top-20 top-10 lg:right-52 md:right-32 right-10'
            />
            <div className='absolute bottom-0 right-0'>
                <div className='flex items-center gap-1 md:translate-x-32 translate-x-24 md:translate-y-6 w-max max-md:hidden'>
                    <div className='size-2 md:size-3 bg-black' />
                    <div className='size-2 md:size-3 bg-black' />
                </div>
                <AbstractImage
                    path='/images/abstract-main.png'
                    width={300}
                    height={300}
                    className='md:w-[300px] md:h-[415px] w-[200px] h-[315px]'
                />
            </div>

            <div className='flex flex-col gap-5 md:gap-10 items-center z-10 relative' id='hero'>
                <Image src={'/images/valorant-logo.png'} alt='logo valorant' width={250} height={250} sizes='100vw' className='md:w-[250px] md:h-[205px] w-[200px] h-[160px]' />
                <div className='flex flex-col gap-3 items-center'>
                    <h1 className='md:text-5xl text-4xl text-main'>Valorant Hub</h1>
                    <p className='md:text-2xl text-lg text-center md:max-w-xl max-w-md md:px-6 px-5'>
                        Your go-to source for strategies, updates, and competitive insights
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
