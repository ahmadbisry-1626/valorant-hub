"use client"

import React, { useMemo } from 'react'
import SearchQuery from './SearchSkin'
import { useBuddies } from '@/hook/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PaginationControl from './PaginationControl'

const Buddies = ({ query, page }: { query: string, page: number }) => {
    const { data: buddies, isLoading, isError } = useBuddies()

    const filteredBuddies = useMemo(() => {
        if (!buddies?.data) return [];
        const search = query.toLowerCase()

        return buddies.data.filter((buddy) => buddy.displayName.toLowerCase().includes(search))
    }, [buddies, query])

    const itemsPerPage = 24
    const totalPages = Math.ceil((filteredBuddies.length) / itemsPerPage)

    const paginatedBuddies = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        return filteredBuddies.slice(startIndex, endIndex)
    }, [filteredBuddies, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )

    if (isError) return notFound()
    if (!buddies || !buddies.data) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <p className='text-gray md:text-xl text-md'>No data found</p>
        </div>
    )

    return (
        <div className='flex flex-col gap-5 md:gap-10 w-full py-20 md:py-32'>
            <div className='flex items-center md:justify-between max-md:flex-col max-md:gap-5 w-full'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl md:w-full' id="hero">Buddies Archive</h1>
                <SearchQuery query={query} placeholder='Search buddies...' />
            </div>

            {paginatedBuddies.length === 0 && !isLoading && !isError &&
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No buddies found</p>
                </div>
            }

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                {paginatedBuddies.map((buddy) => (
                    <div className='flex flex-col gap-2' key={buddy.uuid}>
                        <div className='w-full h-[200px] relative rounded-[12px] bg-black overflow-hidden flex items-center justify-center'>
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #1A1A1A",
                                }}
                            />

                            <Image
                                src={buddy.displayIcon || '/images/pistol.png'}
                                alt={buddy.displayName}
                                width={100}
                                height={100}
                                sizes='100vw'
                                loading='lazy'
                                className='object-cover object-center z-20'
                            />
                        </div>
                        <h2 className='text-sm md:text-base line-clamp-2'>{buddy.displayName}</h2>
                    </div>
                ))}
            </div>

            {paginatedBuddies.length > 0 && (
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

export default Buddies
