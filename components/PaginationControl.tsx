"use client"

import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import { usePathname, useRouter } from 'next/navigation'

interface PaginationProps {
    page: number,
    totalPages: number,
    hasNextPage: boolean,
    hasPrevPage: boolean,
    setPageNumber: (page: number) => void
}

const PaginationControl = ({ page, totalPages, hasNextPage, hasPrevPage, setPageNumber }: PaginationProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const getPages = () => {
        const pages = []
        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (page <= 2) {
                pages.push(1, 2, 3, '...', totalPages)
            } else if (page >= totalPages - 1) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(1, '...', page - 1, page, page + 1, '...', totalPages)
            }
        }
        return pages
    }

    const pages = getPages()

    const onPageChange = (newPage: number) => {
        setPageNumber(newPage)

        const params = new URLSearchParams(window.location.search)
        params.set('page', newPage.toString())
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <Pagination>
            <PaginationContent className="flex items-center gap-2 md:gap-3 mt-5">

                <PaginationItem>
                    {hasPrevPage && (
                        <PaginationLink onClick={() => {
                            if (page > 1) onPageChange(page - 1)
                        }} className={` md:flex hidden cursor-pointer px-4 w-full items-center hover:bg-white-light`}>
                            Prev
                        </PaginationLink>
                    )}
                </PaginationItem>
                {pages.map((p, index) => {
                    const isActive = p === page

                    return (
                        <PaginationItem key={index} className='transition'>
                            {p === '...' ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink onClick={() => {
                                    if (typeof p === 'number') onPageChange(p)
                                }} className={`border-[3px] border-black dark:border-white rounded-[12px] hover:bg-main hover:border-main hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 md:!p-5 ${isActive ? 'bg-main border-main text-white dark:bg-white dark:text-black' : 'bg-transparent text-black dark:text-white'} cursor-pointer select-none`}>
                                    {p}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    {hasNextPage && (
                        <PaginationLink onClick={() => {
                            if (hasNextPage) onPageChange(page + 1)
                        }} className={`md:flex hidden cursor-pointer px-4 w-full items-center hover:bg-white-light`}>
                            Next
                        </PaginationLink>
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationControl
