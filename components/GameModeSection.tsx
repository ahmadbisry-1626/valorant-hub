"use client"

import { gameMode } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const GameModeSection = () => {
    const [isActive, setIsActive] = useState(gameMode[0].name || null)

    return (
        <div className="w-full bg-white relative items-center justify-center overflow-hidden">
            <div className="w-full mask-clip-path-map-bottom bg-main absolute top-0 h-[500px] md:h-[700px] md:-translate-y-20 -translate-y-16" />

            <div className='flex flex-col gap-10 max-md:gap-5 md:max-w-7xl mx-auto px-5 md:px-6 w-full mt-40 md:mt-52 items-center justify-center'>
                <div className='relative flex items-center justify-center'>
                    <Image alt='tagline' src={'/images/tagline-black.png'} width={350} height={350} sizes='100vw' className='md:w-[350px] h-auto w-[250px]' />
                    <h2 className='absolute top-3 md:top-5 left-1/2 -translate-x-1/2 text-2xl md:text-3xl text-white w-max'>GAME MODE</h2>
                </div>

                <div className='flex max-md:flex-col items-center gap-5 w-full justify-center'>
                    {gameMode.map((mode) => {
                        const isModeActive = isActive === mode.name

                        return (
                            <div
                                onMouseEnter={() => setIsActive(mode.name)}
                                key={mode.name}
                                className={`rounded-[12px] bg-black p-4 flex items-center justify-center h-[400px]  ${isModeActive ? 'xl:w-[400px] lg:w-[350px] md:w-[300px] w-full max-md:h-[400px]' : 'xl:w-[150px] lg:w-[120px] md:w-[100px] w-full max-md:h-[200px]'} transition-all duration-300 ease-in-out relative overflow-hidden`}
                            >
                                <Image
                                    src={mode.imageUrl}
                                    alt='IMAGE mode'
                                    width={80}
                                    height={80}
                                    sizes='100vw'
                                    className={`absolute ${isModeActive && 'xl:-translate-x-36 -translate-y-36 lg:-translate-x-30 max-lg:left-5 !w-[60px] lg:!w-[70px] rotate-180'} w-[70px] lg:w-[80px] h-auto transition-all duration-300`}
                                />

                                <span className={`pointer-events-none absolute bottom-5 left-5 text-white text-lg lg:text-xl pr-5 break-normal ${!isModeActive ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'} transition-all duration-300 ease-in-out text-justify`}>
                                    {mode.desc}
                                </span>

                                <div className={`flex flex-col pointer-events-none absolute top-5 right-5 ${!isModeActive ? 'opacity-0 -translate-y-full' : 'translate-y-0 opacity-100'} transition-all duration-300 ease-in-out items-end`}>
                                    <h3 className='text-white text-xl lg:text-2xl'>{mode.name}</h3>
                                    <span className={`text-main text-md lg:text-lg`}>
                                        {mode.duration}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GameModeSection
