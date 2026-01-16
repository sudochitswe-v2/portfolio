import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import PersonalProjects from '@/components/sections/personal-projects';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <PersonalProjects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
