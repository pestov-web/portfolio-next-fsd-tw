import React from 'react';
import { SkillBadge } from '@/entities/skill/ui/SkillBadge';
import { Icon } from '@iconify/react';
import { skills } from '@/shared/config/skillsList';

export const SkillsSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Навыки и опыт
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Я работал с различными технологиями и фреймворками для создания
              современных веб-приложений.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={
                  <Icon
                    icon={skill.icon}
                    width="24"
                    height="24"
                    className="mr-1"
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
