import AgentSection from "@/components/AgentSection";
import GameModeSection from "@/components/GameModeSection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import WeaponSection from "@/components/WeaponSection";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-col overflow-hidden">
            {/* md:max-w-7xl mx-auto px-5 md:px-6 */}
            <HeroSection />
            <AgentSection />
            <div className="w-full h-[200px] bg-black -mt-72 lg:-mt-44" />
            <WeaponSection />

            <MapSection />

            <GameModeSection />

            <div className="h-[500px] bg-white">

            </div>
        </div>
    );
}
