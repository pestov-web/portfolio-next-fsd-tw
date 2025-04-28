import React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button';
import { Social } from '@/shared/ui/Social';
import { Icon } from '@iconify/react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Vladimir Pestov
          </h1>
          <p className="text-xl text-muted-foreground">Frontend Developer</p>
        </div>
        <Social />
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild>
            <Link href="/projects">
              Посмотреть проекты{' '}
              <Icon
                icon="lucide:arrow-right"
                width="24"
                height="24"
                className="ml-2"
              />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Связаться со мной</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
