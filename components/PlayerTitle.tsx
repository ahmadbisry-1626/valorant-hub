"use client"

import React, { useMemo } from 'react'
import SearchQuery from './SearchSkin'
import { useTitles } from '@/hook/queries'
import { notFound } from 'next/navigation'
import PaginationControl from './PaginationControl'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const colorOrder = [
    '#FF6B6B',
    '#FFA931',
    '#6BCB77',
    '#4D96FF',
    '#9B5DE5'
]
const PlayerTitle = ({ query, page }: { query: string, page: number }) => {
    const { data: playerTitles, isLoading, isError } = useTitles()

    const filteredTitles = useMemo(() => {
        if (!playerTitles?.data) return [];
        const search = query.toLowerCase()

        return playerTitles.data.filter((title) => title.titleText?.toLowerCase().includes(search))
    }, [playerTitles, query])

    const itemsPerPage = 36
    const totalPages = Math.ceil((filteredTitles.length) / itemsPerPage)

    const paginatedTitles = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        return filteredTitles.slice(startIndex, endIndex)
    }, [filteredTitles, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )

    if (isError) return notFound()
    if (!playerTitles || !playerTitles.data) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <p className='text-gray md:text-xl text-md'>No data found</p>
        </div>
    )
    return (
        <div className='flex flex-col gap-5 md:gap-10 py-20 md:py-32 w-full'>
            <div className='flex items-center md:justify-between max-md:flex-col max-md:gap-5 w-full'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl md:w-full' id="hero">Player Titles</h1>
                <SearchQuery query={query} placeholder='Search title...' />
            </div>

            {paginatedTitles.length === 0 && !isLoading && !isError &&
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No titles found</p>
                </div>
            }

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                {paginatedTitles.map((title, i) => {
                    const textColor = colorOrder[i % colorOrder.length]

                    return (
                        <div
                            className='px-4 py-2 rounded-[8px] border bg-white hover:bg-white-light flex-flex-col'
                            key={title.uuid}
                        >
                            <p className='text-xs' style={{ color: textColor }}>Title</p>
                            <HoverCard>
                                <HoverCardTrigger className='text-base max-md:text-sm text-gray line-clamp-1 capitalize'>
                                    {title.titleText?.toLocaleLowerCase() || 'Unkown'}
                                </HoverCardTrigger>
                                <HoverCardContent className='capitalize bg-black text-white-lighter p-2 w-max rounded-[4px] text-xs md:text-sm font-russo-one'>
                                    {title.titleText?.toLocaleLowerCase() || 'Unkown'}
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    )
                })}
            </div>

            {paginatedTitles.length > 0 && (
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

export default PlayerTitle
