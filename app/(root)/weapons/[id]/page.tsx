import WeaponDetails from '@/components/WeaponDetails'
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id

    return (
        <div className='w-full relative flex items-center justify-center py-20'>
            <WeaponDetails id={id} />
        </div>
    )
}

export default page
