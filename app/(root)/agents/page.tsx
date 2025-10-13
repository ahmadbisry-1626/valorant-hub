import Agents from '@/components/Agents'
import RoleFilter from '@/components/InititatoFilter'
import SearchAgent from '@/components/SearchAgent'
import React from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string; role?: string }> }) => {
    const params = await searchParams;
    const query = params?.query ?? '';
    const role = params?.role ?? '';

    return (
        <div className='w-full relative'>
            <div className='flex flex-col gap-5 md:gap-10 pt-10 md:pt-20 pb-20'>
                <div className='w-full flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-3xl md:text-4xl mt-10' id="hero">Agents</h1>
                    <div className='w-full max-md:max-w-7xl md:px-6 px-5 mx-auto flex items-center justify-center'>
                        <SearchAgent query={query} />
                    </div>
                    <RoleFilter role={role} />
                </div>
                <Agents role={role} query={query} />
            </div>
        </div>
    )
}

export default page
