import MapDetails from '@/components/MapDetails'
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id

    return (
        <MapDetails id={id}/>
    )
}

export default page
