import Map from '@/components/Map'
import React from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string, page?: string }> }) => {
    const { query = '', page = '1' } = await searchParams

    return (
        <div className='flex items-center justify-center md:max-w-7xl mx-auto px-5 md:px-6 overflow-hidden'>
            <Map query={query} page={parseInt(page)} />
        </div>
    )
}

export default page
