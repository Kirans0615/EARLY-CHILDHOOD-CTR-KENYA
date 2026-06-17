import { HeroSection } from "@/components/HeroSection";
import { ScriptureMarquee } from "@/components/ScriptureMarquee";
import { ImpactNumbers } from "@/components/ImpactNumbers";
import { MissionCentered } from "@/components/home/MissionCentered";
import { GlobalReach } from "@/components/GlobalReach";
import { KenyaHomeFeature } from "@/components/home/KenyaHomeFeature";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { DonateCTA } from "@/components/home/DonateCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScriptureMarquee />
      <ImpactNumbers />
      <MissionCentered />
      <GlobalReach />
      <KenyaHomeFeature />
      <LeadershipPreview />
      <DonateCTA />
    </>
  );
}
