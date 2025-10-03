import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AgentSection = () => {
    return (
        <div className='w-full flex flex-col max-lg:py-20'>
            <div className='flex lg:items-start max-lg:items-center justify-center max-lg:flex-col-reverse lg:gap-20 gap-5 md:max-w-7xl mx-auto px-5 md:px-6 w-full -mb-24'>
                <Image src={'/images/skye.png'} alt='skye agent' width={600} height={600} sizes='100vw' className='xl:w-[600px] lg:w-[500px] h-auto' />

                <div className='relative max-lg:-mb-20'>
                    <Image src={'/images/bubble-chat.png'} alt='skye agent' width={500} height={500} sizes='100vw' className='xl:w-[500px] lg:w-[400px] h-auto lg:block hidden select-none' />
                    <Image src={'/images/bubble-chat-mobil.png'} alt='skye agent' width={500} height={500} sizes='100vw' className='xl:w-[500px] lg:w-[400px] h-auto lg:hidden block select-none' />
                    <h2 className='absolute top-5 left-5 text-xl sm:text-2xl xl:text-[30px] lg:text-[28px] max-w-xs sm:max-w-sm pr-5'>
                        We know what we're doing. Trust each other and we'll be fine
                    </h2>
                </div>
            </div>

            <div className="w-full flex items-center justify-center max-lg:flex-col relative lg:gap-20 gap-5 px-5 md:px-6 mask-clip-path">
                <div className="relative z-10 max-lg:-mb-20">
                    <Image src="/images/bubble-chat-black.png" alt="skye agent" width={500} height={500} sizes="100vw" className="xl:w-[500px] lg:w-[400px] h-auto lg:block hidden select-none" />
                    <Image src="/images/bubble-chat-black-mobile.png" alt="skye agent" width={500} height={500} sizes="100vw" className="xl:w-[500px] lg:w-[400px] h-auto block lg:hidden select-none" />
                    <h2 className="absolute top-5 right-5 text-xl sm:text-2xl xl:text-[30px] lg:text-[28px] max-w-xs sm:max-w-sm text-white text-right pl-5">
                        Looking for your main? Explore the complete Valorant agent list
                    </h2>
                </div>

                <Image src="/images/jett.png" alt="jett agent" width={600} height={600} sizes="100vw" className="relative xl:w-[600px] lg:w-[500px] h-auto z-10 lg:-translate-y-14" />

                <Link href='/' className='absolute lg:bottom-10 bottom-20 md:bottom-26 lg:left-42 max-lg:left-1/2 max-lg:-translate-x-1/2 text-5xl -rotate-18 md:-rotate-10 lg:-rotate-4 uppercase lg:text-black text-white z-10 w-max'>FIND < br className='lg:hidden block'/>AGENT</Link>
            </div>

        </div>
    )
}

export default AgentSection
