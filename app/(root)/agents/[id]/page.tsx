import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <h1>{id}</h1>
        </div>
    )
}

export default page
