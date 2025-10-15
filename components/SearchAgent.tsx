"use client"

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { usePagination } from '@/hook/store'

const SearchAgent = ({ query }: { query: string }) => {
    const { setPageParam} = usePagination()
    const [search, setSearch] = useState(query || '')
    const router = useRouter()
    const pathname = usePathname()

    const handleSubmit = () => {
        const params = new URLSearchParams(window.location.search)
        params.set('query', search)
        params.delete('role')
        if (search) {
            router.replace(`${pathname}?${params.toString()}`)
            params.set('page', '1')
        }
    }

    return (
        <div className='md:w-[500px] w-full h-[54px] bg-white-light rounded-[12px] pl-2 flex items-center overflow-hidden'>
            <Input
                className='size-full input'
                placeholder='Search agent...'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <Button
                type='submit'
                className='h-full rounded-r-[12px] rounded-l-none bg-main cursor-pointer'
                disabled={!search && !query}
                onClick={() => {
                    if (query && search === '') {
                        setSearch('')
                        router.replace(`${pathname}`)
                    } else if (query === search) {
                        setSearch('')
                        router.replace(`${pathname}`)
                    } else {
                        handleSubmit()
                    }
                }}
            >
                {query && search === '' || query === search && query ? 'Clear' : 'Search'}
            </Button>
        </div>
    )
}

export default SearchAgent
