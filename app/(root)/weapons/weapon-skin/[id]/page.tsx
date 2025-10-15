import WeaponSkin from '@/components/WeaponSkin'
import React from 'react'

const page = async ({
    params,
    searchParams
}: {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ query?: string, page?: string }>
}) => {
    const id = (await params).id
    const { query = '', page = '1' } = await searchParams;

    return (
        <WeaponSkin id={id} query={query} page={parseInt(page)} />
    )
}

export default page
