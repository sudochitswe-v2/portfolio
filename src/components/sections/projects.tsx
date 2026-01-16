import { COMPANY_PROJECTS_DATA } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional projects I&apos;ve worked on at companies.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
          {COMPANY_PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrlId={project.imageUrlId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
