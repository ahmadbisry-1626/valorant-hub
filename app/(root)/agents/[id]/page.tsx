import AgentDetails from '@/components/AgentDetails'
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id

    return (
        <AgentDetails id={id} />
    )
}

export default page
