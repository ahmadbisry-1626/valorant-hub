import Agents from '@/components/Agents'
import RoleFilter from '@/components/InititatoFilter'
import SearchAgent from '@/components/SearchAgent'
import React from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string; role?: string, page?: string }> }) => {
    const { query = '', role = '', page = '1' } = await searchParams;

    return (
        <div className='w-full relative'>
            <div className='flex flex-col gap-5 md:gap-10 pt-10 md:pt-20 pb-20'>
                <div className='w-full flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl mt-10' id="hero">Agents</h1>
                    <div className='w-full max-md:max-w-7xl md:px-6 px-5 mx-auto flex items-center justify-center'>
                        <SearchAgent query={query} />
                    </div>
                    <RoleFilter role={role}/>
                </div>
                <Agents role={role} query={query} page={parseInt(page)}/>
            </div>
        </div>
    )
}

export default page
