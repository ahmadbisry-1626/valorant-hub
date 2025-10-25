"use client"

import { useAgentById } from '@/hook/queries'
import { getReleaseDateDisplay } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { notFound } from 'next/navigation'

const AgentDetails = ({ id }: { id: string }) => {
    const { data: agent, isLoading, isError } = useAgentById(id)

    if (isLoading) return (
            <div className='w-full min-h-screen flex items-center justify-center'>
                <div className="loader" />
            </div>
        )
        if (isError) return notFound()
        if (!agent || !agent.data) return (
            <div className='w-full min-h-screen flex items-center justify-center'>
                <p className='text-gray md:text-xl text-md'>No data found</p>
            </div>
        )

    return (
        <div className='w-full md:max-w-7xl mx-auto px-5 md:px-6 flex relative lg:items-start max-lg:items-center max-lg:justify-center gap-5 lg:gap-8 py-20 lg:py-32 max-lg:flex-col'>
            <div className='flex flex-col items-center lg:hidden -mb-2'>
                <span className='text-md md:text-lg text-main' id='hero'>{agent.data.developerName}</span>
                <h1 className='text-3xl md:text-4xl'>{agent.data.displayName}</h1>
            </div>
            <div className='lg:sticky lg:top-20'>
                <div className='sm:w-[400px] w-[300px] h-[450px] md:h-[500px] bg-black relative overflow-hidden rounded-[12px]'>
                    <Image
                        src={agent.data.background}
                        alt={agent.data.displayName}
                        width={400}
                        height={400}
                        sizes='100vw'
                        className='absolute size-full object-cover object-center'
                    />
                    <Image
                        src={agent.data.fullPortraitV2}
                        alt={agent.data.displayName}
                        width={800}
                        height={800}
                        sizes='100vw'
                        className='absolute z-10 translate-y-20 object-cover object-top scale-150'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='lg:flex flex-col hidden'>
                    <span className='text-lg text-main' id='hero'>{agent.data.developerName}</span>
                    <h1 className='text-4xl'>{agent.data.displayName}</h1>
                </div>

                <div className='flex flex-col gap-3 lg:gap-1'>
                    <div className='flex items-center gap-2 md:gap-3 flex-wrap max-lg:justify-center'>
                        <span className='text-sm md:text-base'>{agent.data.role?.displayName}</span>
                        <span className='md:text-xl text-lg'>|</span>
                        <span className='text-sm md:text-base'>
                            {getReleaseDateDisplay(agent.data.releaseDate)}
                        </span>
                        <span className='text-lg md:text-xl'>|</span>
                        <Link href={agent.data.fullPortraitV2} className='text-blue-600 underline md:text-base text-sm' target='blank'>
                            Potrait Image
                        </Link>
                        <span className='text-lg md:text-xl'>|</span>
                        <Link href={agent.data.background} className='text-blue-600 underline md:text-base text-sm' target='blank'>
                            Background Image
                        </Link>
                    </div>
                    <p className='text-sm md:text-base text-gray text-justify break-normal'>{agent.data.description}</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl'>Gradient Colors</h2>
                    <div className='flex items-center gap-2 flex-wrap'>
                        {agent.data.backgroundGradientColors.map((color, i) => (
                            <button
                                className='w-20 h-12 md:w-25 md:h-15 cursor-pointer rounded-[12px] relative flex items-center justify-center overflow-hidden group'
                                key={i}
                                style={{ backgroundColor: `#${color}` }}
                                onClick={async () => {
                                    await navigator.clipboard.writeText(`#${color}`);
                                    toast.success(`Hex code copied to clipboard`);
                                }}
                            >
                                <div className="absolute size-full bg-black/40 group-hover:opacity-100 opacity-0 transition-all duration-300" />
                                <span className='absolute text-white group-hover:opacity-100 opacity-0 transition-all duration-300 text-xs md:text-sm'>Copy</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-1 mt-2">
                    <h2 className="text-xl">Abilities</h2>
                    <Table className="table-auto w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px] max-md:text-xs">Slot</TableHead>
                                <TableHead className="w-[80px] md:w-[100px] max-md:text-xs">Name</TableHead>
                                <TableHead className='max-md:text-xs'>Description</TableHead>
                                <TableHead className="text-right max-md:text-xs">Icon</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {agent.data.abilities.map((ability) => (
                                <TableRow key={ability.displayName} className="align-top">
                                    <TableCell className='text-gray max-md:text-xs'>{ability.slot}</TableCell>
                                    <TableCell className='text-gray max-md:text-xs whitespace-normal break-words leading-relaxed'>{ability.displayName}</TableCell>
                                    <TableCell className="whitespace-normal break-words leading-relaxed text-gray max-md:text-xs">
                                        {ability.description}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Image
                                            src={ability.displayIcon}
                                            alt={ability.displayName}
                                            width={40}
                                            height={40}
                                            sizes="100vw"
                                            className="bg-black rounded-full p-1"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

            </div>
        </div>
    )
}

export default AgentDetails
