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

    const itemsPerPage = 20
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
                <SearchQuery query={query} placeholder='Search bundle...' />
            </div>


            {paginatedPlayerCards.length === 0 && !isLoading && !isError &&
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No buddies found</p>
                </div>
            }

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-full'>
                {paginatedPlayerCards.map((card) => (
                    <div className='relative w-full h-[500px] overflow-hidden rounded-[12px] bg-black' key={card.uuid}
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
                        <Image
                            src={card.largeArt || '/images/pistol.png'}
                            alt={card.displayName}
                            width={600}
                            height={600}
                            sizes='100vw'
                            className='absolute object-contain object-center size-full'
                        />
                        <span className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center max-md:text-sm'>
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
