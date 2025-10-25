"use client"

import { useAgent } from '@/hook/queries'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { toast } from 'sonner'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import PaginationControl from './PaginationControl'
import { notFound } from 'next/navigation'

const Agents = ({ query, role, page }: { query: string, role: string, page: number }) => {
    const { data: agents, isLoading, isError } = useAgent();
    const [isLiked, setIsLiked] = useState<Record<string, boolean>>({})
    const [isSaved, setisSaved] = useState<Record<string, boolean>>({})
    const [isCopied, setIsCopied] = useState<Record<string, boolean>>({})

    const toggleLike = (uuid: string) => {
        setIsLiked((prev) => ({
            ...prev, [uuid]: !prev[uuid]
        }))
    }

    const toggleSave = (uuid: string) => {
        setisSaved((prev) => ({
            ...prev, [uuid]: !prev[uuid]
        }))
    }

    const filteredAgents = useMemo(() => {
        if (!agents?.data) return [];

        return agents.data.filter((agent) => {
            const name = agent?.displayName?.toLowerCase() ?? '';
            const search = query?.toLowerCase() ?? '';
            const matchName = name.includes(search);
            const matchRole = role ? agent.role?.displayName === role : true;
            return matchName && matchRole;
        });
    }, [agents, query, role]);

    const itemsPerPage = 18;
    const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);

    const paginatedAgents = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return filteredAgents.slice(startIndex, endIndex)
    }, [filteredAgents, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isError) return notFound()

    return (
        <div className='w-full md:max-w-7xl mx-auto px-5 md:px-6 flex flex-col'>
            {isLoading && (
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center'>
                    <div className="loader" />
                </div>
            )}

            {paginatedAgents.length === 0 && !isLoading && (
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No agents found</p>
                </div>
            )}

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                {paginatedAgents.map((agent) => (
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

                        <Link href={`/agents/${agent.uuid}`} className='w-full h-[350px] md:h-[400px] bg-black relative overflow-hidden'>
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
                                className='absolute z-10 translate-y-20 object-cover object-top scale-150'
                            />
                        </Link>

                        <div className='px-5 py-3 flex flex-col gap-3 bg-white-light'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <div className='relative cursor-pointer group' onClick={() => toggleLike(agent.uuid)}>
                                        <FaRegHeart className={`size-6 ${isLiked[agent.uuid] ? 'opacity-0' : 'opacity-100'} transition-all duration-200`} />
                                        <FaHeart className={`absolute top-0 left-0 size-6 text-red-500 transition-all duration-200 ${isLiked[agent.uuid] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
                                    </div>
                                    <button
                                        className='relative cursor-pointer'
                                        disabled={isCopied[agent.uuid]}
                                        onClick={async () => {
                                            await navigator.clipboard.writeText(`https://valorant-hub.vercel.app/agents/${agent.uuid}`);
                                            toast.success(`${agent.displayName} link copied to clipboard`);
                                            setIsCopied((prev) => ({
                                                ...prev, [agent.uuid]: true
                                            }))
                                            setTimeout(() => {
                                                setIsCopied((prev) => ({
                                                    ...prev, [agent.uuid]: false
                                                }))
                                            }, 3000);
                                        }}>
                                        <TbCopy className={`size-6.5 ${isCopied[agent.uuid] ? 'opacity-0' : ' opacity-100'} transition-all duration-200`} />
                                        <IoCheckmarkDoneSharp className={`absolute top-0 left-0 size-7 text-black transition-all duration-200 ${isCopied[agent.uuid] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
                                    </button>
                                </div>

                                <div className='relative cursor-pointer group' onClick={() => toggleSave(agent.uuid)}>
                                    <FaRegBookmark className={`size-6 ${isSaved[agent.uuid] ? 'opacity-0' : 'opacity-100'} transition-all duration-200`} />
                                    <FaBookmark className={`absolute top-0 left-0 size-6 text-black transition-all duration-200 ${isSaved[agent.uuid] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
                                </div>
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

            {paginatedAgents.length > 0 && (
                totalPages > 1 && (
                    <PaginationControl
                        page={page}
                        totalPages={totalPages}
                        hasNextPage={hasNextPage}
                        hasPrevPage={hasPrevPage}
                    />
                )
            )}
        </div>
    )
}

export default Agents
