"use client"

import { useMap } from '@/hook/queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { useMemo } from 'react'
import PaginationControl from './PaginationControl'
import SearchQuery from './SearchSkin'

const Map = ({ query, page }: { query: string, page: number }) => {
    const { data: maps, isLoading, isError } = useMap()
    const excludedMaps = ['Skirmish A', 'Skirmish B', 'Skirmish C'];

    const filteredMaps = useMemo(() => {
        if (!maps?.data) return [];
        const search = query.toLowerCase()

        return maps?.data.filter((map) => !excludedMaps.includes(map.displayName) && !map.uuid.includes('ee613ee9-28b7-4beb-9666-08db13bb2244') && map.displayName.toLowerCase().includes(search))
    }, [query, maps])

    const itemsPerPage = 18
    const totalPages = Math.ceil((filteredMaps.length) / itemsPerPage)

    const paginatedMaps = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        return filteredMaps.slice(startIndex, endIndex)
    }, [filteredMaps, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )

    if (isError) return notFound()
    if (!maps || !maps.data) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <p className='text-gray md:text-xl text-md'>No data found</p>
        </div>
    )

    return (
        <div className='flex flex-col gap-5 md:gap-10 w-full py-20 md:py-32'>
            <div className='flex items-center md:justify-between max-md:flex-col max-md:gap-5 w-full'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl md:w-full' id="hero">Explore Maps</h1>
                <SearchQuery query={query} placeholder='Search map...' />
            </div>

            {paginatedMaps.length === 0 && !isLoading && !isError &&
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No maps found</p>
                </div>
            }

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {paginatedMaps.map((map) => (
                    <Link href={`/maps/${map.uuid}`} key={map.uuid} className='relative w-full h-[250px] bg-black rounded-[12px] flex items-center justify-center overflow-hidden group'>
                        <Image
                            src={map.splash}
                            alt={map.displayName}
                            width={600}
                            height={600}
                            sizes='100vw'
                            quality={60}
                            loading='lazy'
                            className='object-cover object-center size-full absolute'
                        />
                        <div className='size-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300'/>
                        <span className='absolute bottom-2 left-4 text-3xl text-white opacity-100 group-hover:opacity-50 transition-all duration-300'>{map.displayName}</span>
                    </Link>
                ))}

            </div>
            {paginatedMaps.length > 0 && (
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

export default Map
