import HeroSection from '../components/sections/HeroSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import SkillsSection from '../components/sections/SkillsSection';
import StatsSection from '../components/sections/StatsSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
