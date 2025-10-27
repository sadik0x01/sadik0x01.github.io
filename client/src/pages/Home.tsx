import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SecurityToolsGrid from "@/components/SecurityToolsGrid";
import WriteupsSection from "@/components/WriteupsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <CertificationsSection />
        <SecurityToolsGrid />
        <WriteupsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
