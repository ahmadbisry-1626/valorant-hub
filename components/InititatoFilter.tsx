"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { roles } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'

const RoleFilter = ({ role }: { role: string }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleRoleChange = (newRole: string) => {
        const params = new URLSearchParams(window.location.search)

        if (newRole === role) {
            params.delete('role')
        } else {
            params.set('role', newRole)
        }

        params.delete('page')
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='w-full py-4 border-t border-b'>
            <Carousel
                opts={{
                    dragFree: true
                }}
            >
                <CarouselContent className='md:max-w-7xl mx-auto px-5 md:px-6 md:flex md:items-center md:justify-center'>
                    {roles.map((roleItem) => {
                        const isActive = roleItem.name === role

                        return (
                            <CarouselItem key={roleItem.name} className='basis-1/ select-none'>
                                <button
                                    className={`border px-4 py-2 rounded-[8px] ${isActive && 'bg-main text-white border-main'} cursor-pointer`}
                                    onClick={() => handleRoleChange(roleItem.name)}>
                                    {roleItem.name}
                                </button>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default RoleFilter
