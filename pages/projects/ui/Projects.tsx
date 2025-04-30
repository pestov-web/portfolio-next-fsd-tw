import React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button';
import { ProjectCard } from '@/entities/project/ui/ProjectCard';
import { projects } from '@/entities/project/model/data';
import { Icon } from '@iconify/react';

export const Projects: React.FC = () => {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <Button variant="ghost" size="sm" className="w-fit" asChild>
            <Link href="/">
              <Icon
                icon="lucide:arrow-left"
                width="24"
                height="24"
                className="mr-2"
              />
              Назад на главную
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Мои проекты</h1>
          <p className="text-muted-foreground max-w-[700px]">
            Коллекция моих работ, сторонних проектов и вкладов с открытым
            исходным кодом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              link={`/projects/${project.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
