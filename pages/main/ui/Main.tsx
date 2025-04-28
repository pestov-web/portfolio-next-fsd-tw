import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { BlogSection } from './BlogSection';
import { ContactSection } from './ContactSection';

export const Main: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};
