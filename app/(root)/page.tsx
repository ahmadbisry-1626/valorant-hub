import AgentSection from "@/components/AgentSection";
import HeroSection from "@/components/HeroSection";
import WeaponSection from "@/components/WeaponSection";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-col overflow-hidden">
            {/* md:max-w-7xl mx-auto px-5 md:px-6 */}
            <HeroSection />
            <AgentSection />
            <div className="w-full h-[200px] bg-black -mt-72 lg:-mt-44" />
            <WeaponSection />

            <div className="w-full relative bg-black flex items-center justify-center">
                <div className="w-full h-[700px] bg-main mask-clip-path-map absolute top-0" />
            </div>
        </div>
    );
}
