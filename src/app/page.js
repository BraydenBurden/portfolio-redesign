import HeroSection from "../components/HeroSection";
import FeaturedProjects from "../components/FeaturedProjects";
import SkillsSection from "../components/SkillsSection";
import AboutPreview from "../components/AboutPreview";
import ContactCTA from "../components/ContactCTA";

export const metadata = {
  title: "Brayden Burden | Full-Stack Developer",
  description:
    "I'm Brayden Burden, a full-stack developer from Newfoundland, Canada. I build web applications, backend systems, and digital products.",
  openGraph: {
    title: "Brayden Burden | Full-Stack Developer",
    description:
      "Turning ideas into working products through full-stack development.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <main id="top">
        <HeroSection />
        <FeaturedProjects />
        <SkillsSection />
        <AboutPreview />
        <ContactCTA />
      </main>
    </>
  );
}
