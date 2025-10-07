import { mapImage } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiMiniPaperAirplane } from "react-icons/hi2";

const MapSection = () => {
    return (
        <div className="w-full relative bg-black flex items-center justify-center">
            <div className="w-full h-[700px] bg-main mask-clip-path-map absolute top-0" />

            <div className='w-full bg-main mt-40 pb-20 z-10 relative'>
                <Image
                    src={'/images/abstract-map.png'}
                    alt='Abstract'
                    width={300}
                    height={300}
                    sizes='100vw'
                    className='absolute bottom-20'
                />

                <div className='w-full md:max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:gap-10 gap-5'>
                    <h2 className='text-4xl lg:text-5xl text-left leading-tight'>
                        Explore New <br /> Grounds
                    </h2>

                    <div className='grid grid-cols-2 md:gap-7 gap-5 w-full relative'>
                        {mapImage.map((map) => (
                            <div key={map.name} className='w-full rounded-[12px] overflow-hidden h-[250px] md:h-[350px]'>
                                <Image
                                    src={map.pathMD}
                                    alt={map.name}
                                    width={800}
                                    height={800}
                                    sizes='100vw'
                                    className='size-full object-cover object-center md:block hidden'
                                />
                                <Image
                                    src={map.pathSM}
                                    alt={map.name}
                                    width={800}
                                    height={800}
                                    sizes='100vw'
                                    className='size-full object-cover object-center block md:hidden'
                                />
                            </div>
                        ))}

                        <Link href={'/'}
                            className='size-auto rounded-[12px] relative bg-black hover:bg-white transtion-all duration-300 ease-in-out group'
                            style={{

                                backgroundImage: `
    radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.15) 1px, transparent 0),   /* soft violet */
    radial-gradient(circle at 1px 1px, rgba(96, 165, 250, 0.12) 1px, transparent 0),  /* soft blue */
    radial-gradient(circle at 1px 1px, rgba(244, 114, 182, 0.10) 1px, transparent 0)  /* soft pink */
  `,
                                backgroundSize: "20px 20px, 30px 30px, 25px 25px",
                                backgroundPosition: "0 0, 10px 10px, 15px 5px",
                            }}
                        >
                            <h2 className='absolute max-md:left-5 max-md:top-5 md:top-6 md:left-6 text-3xl md:text-5xl text-white group-hover:text-black transition-all duration-300 ease-in-out group-hover:leading-tight'>
                                VIEW <br />
                                MAP <br />
                                LIST
                            </h2>

                            <HiMiniPaperAirplane className='absolute size-12 md:size-16 -rotate-45 max-md:right-5 max-md:bottom-5 md:bottom-6 md:right-6 text-white group-hover:text-black transition-all duration-300 ease-in-out' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapSection
