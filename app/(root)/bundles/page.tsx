import Bundle from '@/components/Bundle';
import React from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string, page?: string }> }) => {
    const { query = '', page = '1' } = await searchParams;

    return (
        <div className='w-full flex items-center justify-center md:max-w-7xl mx-auto md:px-6 px-5 overflow-hidden'>
            <Bundle query={query} page={parseInt(page)} />
        </div>
    )
}

export default page
