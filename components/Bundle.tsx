"use client"

import { useBundle } from '@/hook/queries'
import { notFound } from 'next/navigation'
import React, { useMemo } from 'react'
import SearchQuery from './SearchSkin'
import Image from 'next/image'
import PaginationControl from './PaginationControl'

const Bundle = ({ query, page }: { query: string, page: number }) => {
    const { data: bundles, isLoading, isError } = useBundle()

    const filteredBundles = useMemo(() => {
        if (!bundles?.data) return [];
        const search = query.toLowerCase()

        return bundles.data.filter((bundle) => bundle.displayName.toLowerCase().includes(search) && !bundle.uuid.includes('72e38650-47a3-8330-d02b-62890c5753aa'))
    }, [bundles, query])

    const itemsPerPage = 18
    const totalPages = Math.ceil((filteredBundles.length) / itemsPerPage)

    const paginatedBundles = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return filteredBundles.slice(startIndex, endIndex)
    }, [filteredBundles, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )

    if (isError) return notFound()
    if (!bundles || !bundles.data) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <p className='text-gray md:text-xl text-md'>No data found</p>
        </div>
    )
    return (
        <div className='flex flex-col gap-5 md:gap-10 w-full py-20 md:py-32'>
            <div className='flex items-center md:justify-between max-md:flex-col max-md:gap-5 w-full'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl md:w-full' id="hero">Bundle Archive</h1>
                <SearchQuery query={query} placeholder='Search bundle...' />
            </div>

            {paginatedBundles.length === 0 && !isLoading && !isError &&
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No bundles found</p>
                </div>
            }

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                {paginatedBundles.map((bundle) => (
                    <div className='flex flex-col gap-2 w-full' key={bundle.uuid}>
                        <div className='w-full relative h-[150px] md:h-[200px] rounded-[12px] overflow-hidden'>
                            <Image
                                src={bundle.displayIcon || '/images/pistol.png'}
                                alt={bundle.displayName}
                                width={600}
                                height={600}
                                sizes='100vw'
                                className='absolute size-full object-cover object-center'
                            />
                        </div>
                        <h2 className='text-base md:text-xl line-clamp-2'>{bundle.displayName}</h2>
                    </div>
                ))}
            </div>

            {paginatedBundles.length > 0 && (
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

export default Bundle
