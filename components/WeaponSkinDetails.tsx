import { WeaponSkin, WeaponsResponseById } from '@/interface'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const WeaponSkinDetails = ({ skin, weapon }: { skin: WeaponSkin, weapon: WeaponsResponseById }) => {
    const sidearm = weapon.data.shopData?.categoryText === 'Sidearms'
    const melee = weapon.data.displayName === 'Melee'

    const levelsWithVideo = skin.levels.filter((level) => level.streamedVideo);
    const streamedCount = levelsWithVideo.length;
    const chromaCount = skin.chromas.length;

    let displayType: "video" | "chroma" | "none" = "none";

    // PRIORITY RULES
    if (streamedCount > 2) {
        displayType = "video"; // Rule 1: show streamed videos if more than 2
    } else if (streamedCount === 0 && chromaCount >= 2) {
        displayType = "chroma"; // Rule 2: no streamedVideo → show chromas
    } else if (streamedCount <= 2 && streamedCount > 0 && chromaCount > 2) {
        displayType = "chroma"; // Rule 3: few videos but many chromas → chromas
    } else if (streamedCount === 0 && chromaCount < 2) {
        displayType = "none"; // Rule 4 (updated): no video + <2 chromas → not found
    } else if (streamedCount >= 1 && chromaCount <= 2) {
        displayType = "video"; // Rule 5: at least one video + few chromas → show video
    }



    return (
        <Dialog>
            <DialogTrigger className='bg-white-light text-black rounded-t-none h-[45px] md:h-[54px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer max-md:!text-xs'>
                View
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='font-russo-one'>{skin.displayName}</DialogTitle>

                    {displayType === "video" ? (
                        <Carousel className="w-full">
                            <CarouselContent>
                                {levelsWithVideo.map((level, i) => (
                                    <CarouselItem key={i} className="w-full flex-shrink-0 mt-2 relative">
                                        <span className="absolute top-5 right-5 font-russo-one max-w-[300px] md:max-w-[500px] bg-main/80 text-white px-4 py-2 rounded-[8px] max-md:text-xs text-right text-sm select-none z-20">
                                            {level.displayName}
                                        </span>
                                        <video
                                            src={level.streamedVideo || ""}
                                            controls
                                            className="w-full h-[300px] md:h-[350px] bg-black mx-auto rounded-lg"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="translate-x-8" />
                            <CarouselNext className="-translate-x-8" />
                        </Carousel>
                    ) : displayType === "chroma" ? (
                        <Carousel className="w-full">
                            <CarouselContent className="pl-4">
                                {skin.chromas.map((chroma, i) => (
                                    <CarouselItem
                                        key={i}
                                        className="w-full flex-shrink-0 mt-2 relative bg-black h-[300px] flex items-center justify-center rounded-[12px] overflow-hidden"
                                        style={{
                                            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.15) 1px, transparent 0),
              radial-gradient(circle at 1px 1px, rgba(96, 165, 250, 0.12) 1px, transparent 0),
              radial-gradient(circle at 1px 1px, rgba(244, 114, 182, 0.10) 1px, transparent 0)
            `,
                                            backgroundSize: "20px 20px, 30px 30px, 25px 25px",
                                            backgroundPosition: "0 0, 10px 10px, 15px 5px",
                                        }}
                                    >
                                        <span className="absolute top-5 right-5 font-russo-one max-w-[300px] md:max-w-[500px] bg-main/80 text-white px-4 py-2 rounded-[8px] max-md:text-xs text-right text-sm select-none z-20">
                                            {chroma.displayName}
                                        </span>
                                        <Image
                                            alt={chroma.displayName}
                                            src={chroma.fullRender || ""}
                                            width={400}
                                            height={400}
                                            className={`${sidearm && "scale-70"} ${melee && "scale-60"}`}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="translate-x-8" />
                            <CarouselNext className="-translate-x-8" />
                        </Carousel>
                    ) : (
                        <div className="h-[250px] font-russo-one w-full flex items-center justify-center text-gray text-lg">
                            <span>No info found</span>
                        </div>
                    )}


                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default WeaponSkinDetails
