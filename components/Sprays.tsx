"use client"

import { useSprays } from '@/hook/queries'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React, { useMemo } from 'react'
import SearchQuery from './SearchSkin'
import PaginationControl from './PaginationControl'

const Sprays = ({ query, page }: { query: string, page: number }) => {
    const { data: sprays, isLoading, isError } = useSprays()

    const filteredSprays = useMemo(() => {
        if (!sprays?.data) return [];
        const search = query.toLowerCase()

        return sprays.data.filter((spray) => spray.displayName.toLowerCase().includes(search))
    }, [sprays, query])

    const itemsPerPage = 24
    const totalPages = Math.ceil((filteredSprays.length) / itemsPerPage)

    const paginatedSprays = useMemo(() => {
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        return filteredSprays.slice(start, end)
    }, [filteredSprays, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )

    if (isError) return notFound()
    if (!sprays || !sprays.data) return (
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

            {paginatedSprays.length === 0 && !isLoading && !isError &&
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No buddies found</p>
                </div>
            }

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                {paginatedSprays.map((spray) => (
                    <div className='flex flex-col gap-2' key={spray.uuid}>
                        <div className='w-full h-[200px] relative rounded-[12px] bg-black overflow-hidden flex items-center justify-center'>
                            <Image
                                src={spray.animationPng || spray.fullTransparentIcon || '/images/spray.png'}
                                alt={spray.displayName}
                                width={100}
                                height={100}
                                sizes='100vw'
                                loading='lazy'
                                className='object-cover object-center z-20'
                            />
                        </div>
                        <h2 className='text-sm md:text-base line-clamp-2'>{spray.displayName}</h2>
                    </div>
                ))}
            </div>

            {paginatedSprays.length > 0 && (
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

export default Sprays
