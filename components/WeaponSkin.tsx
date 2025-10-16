"use client"

import { useWeaponById } from '@/hook/queries'
import React, { useMemo, useState } from 'react'
import SearchSkin from './SearchSkin'
import WeaponSkinCard from './WeapinSkinCard'
import PaginationControl from './PaginationControl'
import { notFound } from 'next/navigation'

const WeaponSkin = ({ id, query, page }: { id: string, query: string, page: number }) => {
    const { data: weapon, isLoading, isError } = useWeaponById(id)
    const weaponSkin = weapon?.data.skins ?? [];

    const filteredSkins = useMemo(() => {
        const search = query.toLowerCase();
        return weaponSkin.filter((skin) =>
            skin.displayName.toLowerCase().includes(search) && skin.displayName !== `Standard ${weapon?.data.displayName}` && skin.displayName !== 'Random Favorite Skin'
        );
    }, [weaponSkin, query]);

    const itemsPerPage = 18;
    const totalPages = Math.ceil(filteredSkins.length / itemsPerPage);

    const paginatedSkins = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return filteredSkins.slice(startIndex, endIndex)
    }, [filteredSkins, page])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )
    if (isError) return notFound()
    if (!weapon || !weapon.data) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <p className='text-gray md:text-xl text-md'>No data found</p>
        </div>
    )

    return (
        <div className='w-full flex items-center justify-center md:max-w-7xl mx-auto px-5 md:px-6 overflow-hidden relative flex-col gap-5 md:gap-7 py-20 md:py-32'>
            <div className='flex items-center max-sm:flex-col md:justify-between w-full gap-3'>
                <h1 className='text-3xl md:text-4xl md:w-full' id="hero">{weapon.data.displayName} Skins</h1>

                <SearchSkin query={query} />
            </div>

            {paginatedSkins.length === 0 && !isLoading && !isError && (
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center bg-white-light rounded-[12px]'>
                    <p className='text-gray md:text-xl text-md'>No skins found</p>
                </div>
            )}

            {isLoading ? (
                <div className='w-full h-[300px] md:h-[400px] flex items-center justify-center'>
                    <div className="loader" />
                </div>
            ) : (
                <>
                    <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-5'>
                        {paginatedSkins.map((skin) => (
                            <WeaponSkinCard key={skin.uuid} skin={skin} weapon={weapon} />
                        ))}
                    </div>

                    {paginatedSkins.length > 0 && (
                        totalPages > 1 && (
                            <PaginationControl
                                page={page}
                                totalPages={totalPages}
                                hasNextPage={hasNextPage}
                                hasPrevPage={hasPrevPage}
                            />
                        )
                    )}
                </>
            )}
        </div>
    )
}

export default WeaponSkin
