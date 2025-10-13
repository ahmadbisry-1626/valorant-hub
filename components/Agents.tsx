"use client"

import { useAgent } from '@/hook/queries'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Agents = ({ query, role }: { query: string, role: string }) => {
    const { data: agents, isLoading, isError } = useAgent()
    const [filteredAgents, setFilteredAgents] = useState(agents?.data ?? [])

    useMemo(() => {
        const filtered = agents?.data?.filter((agent) => {
            const name = agent?.displayName?.toLowerCase() ?? ''
            const search = query?.toLowerCase() ?? ''
            const matchName = name.includes(search)
            const matchRole = role ? agent.role?.displayName === role : true
            return matchName && matchRole
        })

        setFilteredAgents(filtered ?? [])
    }, [query, role, agents])

    return (
        <div className='w-full md:max-w-7xl mx-auto px-5 md:px-6'>
            {isLoading && (
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center'>
                    <div className="loader"/>
                </div>
            )}

            {filteredAgents.length === 0 && !isLoading && (
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No agents found</p>
                </div>
            )}

            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {filteredAgents.map((agent) => (
                    <div key={agent.uuid} className='flex flex-col overflow-hidden rounded-[12px] bg-white-light shadow-sm'>
                        <Link href={`/agents/${agent.uuid}`} className='px-5 py-2 flex items-center gap-3'>
                            <div className='flex items-center justify-center rounded-full bg-white-lighter overflow-hidden'>
                                <Image
                                    src={agent.displayIcon}
                                    alt={agent.displayName}
                                    width={50}
                                    height={50}
                                    sizes='100vw'
                                    className=''
                                />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-md md:text-lg'>{agent.displayName}</h2>
                                <span className='text-gray max-md:text-sm'>{agent.role?.displayName}</span>
                            </div>
                        </Link>

                        <Link href={`/agents/${agent.uuid}`} className='w-full h-[300px] md:h-[400px] bg-black relative overflow-hidden'>
                            <Image
                                src={agent.background}
                                alt={agent.displayName}
                                width={400}
                                height={400}
                                sizes='100vw'
                                className='absolute size-full object-cover object-center'
                            />
                            <Image
                                src={agent.fullPortraitV2}
                                alt={agent.displayName}
                                width={800}
                                height={800}
                                sizes='100vw'
                                loading='lazy'
                                className='absolute z-10 translate-y-20 object-cover object-top scale-150'
                            />
                        </Link>

                        <div className='px-5 py-3 flex flex-col gap-3 bg-white-light'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <FaRegHeart className='size-6' />
                                    <TbCopy className='size-6.5' />
                                </div>

                                <FaRegBookmark className='size-6' />
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="text-gray line-clamp-4 md:line-clamp-3 max-md:text-sm">
                                    <span className="text-black inline-flex items-center gap-1 max-md:text-sm">
                                        {agent.developerName}
                                        <RiVerifiedBadgeFill className="size-4 md:size-5 text-main" />
                                    </span>{" "}
                                    {agent.description}
                                </p>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Agents
