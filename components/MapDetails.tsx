"use client"

import { useMapById } from '@/hook/queries'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const MapDetails = ({ id }: { id: string }) => {
    const { data: map, isLoading, isError } = useMapById(id)

    if (isLoading) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="loader" />
        </div>
    )
    if (isError) return notFound()
    if (!map || !map.data) return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <p className='text-gray md:text-xl text-md'>No data found</p>
        </div>
    )
    return (
        <div className='w-full flex max-lg:flex-col max-lg:items-center lg:items-start max-md:items-center gap-5 md:gap-7 md:max-w-7xl mx-auto px-5 md:px-6 relative py-20 md:py-32'>
            <div className='flex flex-col lg:hidden items-center'>
                <span className='text-main text-lg' id="hero">{map.data.coordinates ? map.data.coordinates : 'Unknown coordinates'}</span>
                <h1 className='text-4xl'>{map.data.displayName}</h1>
            </div>

            <div className='lg:sticky lg:top-20'>
                <div className='sm:w-[400px] w-[350px] h-[500px] md:h-[600px] relative rounded-[12px] overflow-hidden'>
                    <Image
                        src={map.data.listViewIconTall || 'https://media.valorant-api.com/maps/ee613ee9-28b7-4beb-9666-08db13bb2244/listviewicontall.png'}
                        alt={map.data.displayName}
                        width={600}
                        height={600}
                        sizes='100vw'
                        className='absolute size-full object-cover object-center'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-3 w-full'>
                <div className='lg:flex flex-col hidden'>
                    <span className='text-main tetx-lg' id="hero">{map.data.coordinates ? map.data.coordinates : 'Unknown coordinates'}</span>
                    <h1 className='text-4xl'>{map.data.displayName}</h1>
                </div>

                <div className="flex flex-col gap-1 mt-2">
                    <h2 className="text-xl">Callouts</h2>

                    {map.data.callouts && map.data.callouts?.length > 0 ? (
                        <Table className="table-auto w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px] md:w-[150px] max-md:text-xs">regionName</TableHead>
                                <TableHead className="w-[80px] md:w-[200px] max-md:text-xs">superRegion</TableHead>
                                <TableHead className='max-md:text-xs md:w-[200px]'>Location</TableHead>
                                <TableHead className="max-md:text-xs md:w-[200px]">scale3D</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {map.data.callouts?.map((callout, i) => (
                                <TableRow key={i} className="align-top">
                                    <TableCell className='text-gray max-md:text-xs'>{callout.regionName}</TableCell>
                                    <TableCell className='text-gray max-md:text-xs whitespace-normal break-words leading-relaxed'>
                                        {callout.superRegionName}
                                    </TableCell>
                                    <TableCell className="whitespace-normal break-words leading-relaxed text-gray max-md:text-xs">
                                        {callout.location
                                            ? <span>x: {callout.location.x} <br /> y: {callout.location.y} <br /> z: {callout.location.z}</span>
                                            : 'Unknown'}
                                    </TableCell>
                                    <TableCell className="whitespace-normal break-words leading-relaxed text-gray max-md:text-xs">
                                        {callout.scale3D
                                            ? <span>x: {callout.scale3D.x} <br /> y: {callout.scale3D.y} <br /> z: {callout.scale3D.z}</span>
                                            : 'Unknown'}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    ): (
                        <div className='w-full rounded-[12px] h-[300px] bg-white-light flex items-center justify-center'>
                            <p className='text-gray md:text-xl text-md'>No data found</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default MapDetails
