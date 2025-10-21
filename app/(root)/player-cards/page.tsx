import PlayerCards from '@/components/PlayerCards';
import React from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ query: string, page: string }> }) => {
    const { query = '', page = '1' } = await searchParams;

    return (
        <div className='flex items-center justify-center w-full md:max-w-7xl mx-auto md:px-6 px-5 overflow-hidden'>
            <PlayerCards query={query} page={parseInt(page)}/>
        </div>
    )
}

export default page
