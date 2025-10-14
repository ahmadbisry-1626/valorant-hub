"use client"

import { useWeaponById } from '@/hook/queries'
import React from 'react'
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cleanEnum } from '@/lib/utils';
import { safeValue } from '../lib/utils';
import Link from 'next/link';
import WeaponSkinCard from './WeapinSkinCard';

const WeaponDetails = ({ id }: { id: string }) => {
    const { data: weapon, isLoading, isError } = useWeaponById(id)
    const sidearm = weapon?.data?.shopData?.categoryText === 'Sidearms'
    if (!weapon || !weapon.data && !isLoading) return
    const melee = weapon.data.displayName === 'Melee'

    return (
        <div className='w-full flex flex-col gap-5 md:gap-7 md:max-w-7xl mx-auto px-5 md:px-6 relative'>
            <div className='absolute top-0' id='hero' />
            <div className='w-full h-[150px] md:h-[200px] bg-black flex items-center justify-center overflow-hidden relative rounded-[12px]'>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
                    }}
                />
                <Image
                    src={weapon?.data.displayIcon}
                    alt={weapon?.data.displayName}
                    width={400}
                    height={400}
                    sizes='100vw'
                    className={`object-cover ${sidearm && 'scale-70'} relative md:w-[400px] h-auto w-[250px] ${melee && 'scale-70'}`}
                />
            </div>

            <div className='flex flex-col gap-3'>
                <h2 className='text-xl'>Weapon Stats</h2>
                <Table className="table-auto w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="max-md:text-xs">Fire Rate</TableHead>
                            <TableHead className="max-md:text-xs">Magazine Size</TableHead>
                            <TableHead className="max-md:text-xs">Run Speed</TableHead>
                            <TableHead className="max-md:text-xs">Equip Time</TableHead>
                            <TableHead className="max-md:text-xs">Reload Time</TableHead>
                            <TableHead className="max-md:text-xs">Accuracy</TableHead>
                            <TableHead className="max-md:text-xs">Pellet Count</TableHead>
                            <TableHead className="max-md:text-xs">Wall Pen</TableHead>
                            <TableHead className="max-md:text-xs">Feature</TableHead>
                            <TableHead className="max-md:text-xs">Fire Mode</TableHead>
                            <TableHead className="max-md:text-xs">Alt Fire</TableHead>
                        </TableRow>

                    </TableHeader>

                    <TableBody>
                        <TableRow className="align-top">
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.fireRate)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.magazineSize)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.runSpeedMultiplier)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.equipTimeSeconds)}s
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.reloadTimeSeconds)}s
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.firstBulletAccuracy)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.shotgunPelletCount)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(cleanEnum(weapon.data.weaponStats?.wallPenetration))}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(cleanEnum(weapon.data.weaponStats?.feature))}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(cleanEnum(weapon.data.weaponStats?.fireMode))}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(cleanEnum(weapon.data.weaponStats?.altFireType))}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className='flex flex-col gap-3'>
                <h2 className='text-xl'>Ads Stats</h2>
                <Table className="table-auto w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="max-md:text-xs">Zoom Multiplier</TableHead>
                            <TableHead className="max-md:text-xs">Fire Rate</TableHead>
                            <TableHead className="max-md:text-xs">Run Speed</TableHead>
                            <TableHead className="max-md:text-xs">Burst Count</TableHead>
                            <TableHead className="max-md:text-xs">First Bullet Accuracy</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow className="align-top">
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.adsStats?.zoomMultiplier)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.adsStats?.fireRate)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.adsStats?.runSpeedMultiplier)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.adsStats?.burstCount)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.weaponStats?.adsStats?.firstBulletAccuracy)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            {weapon.data.weaponStats?.damageRanges && weapon.data.weaponStats?.damageRanges.length > 0 && (
                <div className='flex flex-col gap-3'>
                    <h2 className='text-xl'>Damage Range</h2>
                    <Table className="table-auto w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="max-md:text-xs">Range Start</TableHead>
                                <TableHead className="max-md:text-xs">Range End</TableHead>
                                <TableHead className="max-md:text-xs">Head Damage</TableHead>
                                <TableHead className="max-md:text-xs">Body Damage</TableHead>
                                <TableHead className="max-md:text-xs">Leg Damage</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {weapon.data.weaponStats?.damageRanges.map((range, i) => (
                                <TableRow className="align-top" key={i}>
                                    <TableCell className='text-gray max-md:text-xs'>
                                        {safeValue(range.rangeStartMeters)}
                                    </TableCell>
                                    <TableCell className='text-gray max-md:text-xs'>
                                        {safeValue(range.rangeEndMeters)}
                                    </TableCell>
                                    <TableCell className='text-gray max-md:text-xs'>
                                        {safeValue(range.headDamage)}
                                    </TableCell>
                                    <TableCell className='text-gray max-md:text-xs'>
                                        {safeValue(range.bodyDamage)}
                                    </TableCell>
                                    <TableCell className='text-gray max-md:text-xs'>
                                        {safeValue(range.legDamage)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}

            <div className='flex flex-col gap-3'>
                <h2 className='text-xl'>Shop Data</h2>
                <Table className="table-auto w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="max-md:text-xs">Cost</TableHead>
                            <TableHead className="max-md:text-xs">Category</TableHead>
                            <TableHead className="max-md:text-xs">Shop Order</TableHead>
                            <TableHead className="max-md:text-xs">Category Text</TableHead>
                            <TableHead className="max-md:text-xs">Trashable</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow className="align-top" >
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.shopData?.cost)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.shopData?.category)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.shopData?.shopOrderPriority)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.shopData?.categoryText)}
                            </TableCell>
                            <TableCell className='text-gray max-md:text-xs'>
                                {safeValue(weapon.data.shopData?.canBeTrashed) ? 'Yes' : 'No'}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className='flex flex-col gap-3 w-full items-center justify-center'>
                <h2 className='text-xl w-full'>Weapon Skin</h2>

                <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-5'>
                    {weapon.data.skins.slice(0, 9).map((skin) => (
                        <WeaponSkinCard key={skin.uuid} skin={skin} weapon={weapon} />
                    ))}
                </div>

                <Link href={`/weapons/weapon-skin/${id}`} className='mt-10 text-xl md:text-2xl text-main'>
                    See All {weapon.data.displayName} Skins
                </Link>
            </div>
        </div>
    )
}

export default WeaponDetails
