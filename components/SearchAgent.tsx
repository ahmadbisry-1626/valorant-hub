"use client"

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'

const SearchAgent = ({ query }: { query: string }) => {
    const [search, setSearch] = useState(query || '')
    const router = useRouter()
    const pathname = usePathname()

    const handleSubmit = () => {
        const params = new URLSearchParams(window.location.search)

        if (search) {
            params.set('query', search)
            params.delete('page')
            params.delete('role')
            router.replace(`${pathname}?${params.toString()}`)
        } else {
            params.delete('query')
            params.delete('page')
            router.replace(`${pathname}?${params.toString()}`)
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
