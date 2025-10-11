import AgentSection from "@/components/AgentSection";
import BundleSection from "@/components/BundleSection";
import CurrencySection from "@/components/CurrencySection";
import GameEquipmentSection from "@/components/GameEquipmentSection";
import GameModeSection from "@/components/GameModeSection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import WeaponSection from "@/components/WeaponSection";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-col overflow-hidden">
            <HeroSection />
            <AgentSection />
            <div className="w-full h-[200px] bg-black -mt-72 lg:-mt-44" />
            <WeaponSection />
            <MapSection />
            <GameModeSection />
            <GameEquipmentSection />
            <CurrencySection />
            <BundleSection />
        </div>
    );
}
