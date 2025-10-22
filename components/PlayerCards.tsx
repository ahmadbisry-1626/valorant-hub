"use client"

import { usePlayerCards } from '@/hook/queries'
import React, { useMemo } from 'react'
import SearchQuery from './SearchSkin'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PaginationControl from './PaginationControl'

const PlayerCards = ({ query, page }: { query: string, page: number }) => {
    const { data: playerCards, isLoading, isError } = usePlayerCards()

    const filteredPlayerCards = useMemo(() => {
        if (!playerCards?.data) return [];
        const search = query.toLowerCase()

        return playerCards.data.filter((card) => card.displayName.toLowerCase().includes(search))
    }, [playerCards, query])

    const itemsPerPage = 24
    const totalPages = Math.ceil((filteredPlayerCards.length) / itemsPerPage)

    const paginatedPlayerCards = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        return filteredPlayerCards.slice(startIndex, endIndex)
    }, [filteredPlayerCards, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )

    if (isError) return notFound()
    if (!playerCards || !playerCards.data) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <p className='text-gray md:text-xl text-md'>No data found</p>
        </div>
    )

    return (
        <div className='flex flex-col gap-5 md:gap-10 w-full py-20 md:py-32'>
            <div className='flex items-center md:justify-between max-md:flex-col max-md:gap-5 w-full'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl md:w-full' id="hero">Player Cards</h1>
                <SearchQuery query={query} placeholder='Search card...' />
            </div>


            {paginatedPlayerCards.length === 0 && !isLoading && !isError &&
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No cards found</p>
                </div>
            }

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 w-full'>
                {paginatedPlayerCards.map((card) => (
                    <div key={card.uuid} className='relative overflow-hidden bg-black rounded-[12px]'>
                        <Image
                            src={card.largeArt || '/images/pistol.png'}
                            alt={card.displayName}
                            width={600}
                            height={600}
                            sizes='100vw'
                            loading='lazy'
                            className='rounded-[12px]'
                        />

                        <div className='w-full h-[150px] bg-gradient-to-t from-black absolute bottom-0 rounded-b-[12px]'/>
                        <span className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center text-xs md:text-sm w-full px-3'>
                            {card.displayName}
                        </span>
                    </div>
                ))}
            </div>

            {paginatedPlayerCards.length > 0 && (
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

export default PlayerCards
