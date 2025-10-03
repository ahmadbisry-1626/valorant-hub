import AgentSection from "@/components/AgentSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-col overflow-hidden">
            {/* md:max-w-7xl mx-auto px-5 md:px-6 */}
            <HeroSection />
            <AgentSection />
            <div className="w-full h-[300px] bg-black -mt-72 lg:-mt-44">

            </div>
        </div>
    );
}
