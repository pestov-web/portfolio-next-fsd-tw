import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { projects } from '@/entities/project/model/data';
import { Button } from '@/shared/ui/Button';
import { ProjectCard } from '@/entities/project/ui/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Последние проекты
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Посмотрите некоторые из моих последних работ. Эти проекты
              демонстрируют мои навыки и опыт.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                link={`/projects/${project.id}`}
              />
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link href="/projects">
              Все проекты{' '}
              <Icon
                icon="lucide:arrow-right"
                width="24"
                height="24"
                className="ml-2"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
