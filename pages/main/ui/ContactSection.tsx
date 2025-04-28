import React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Хотите связаться со мной?
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Есть вопросы ? Я открыт к общению и всегда рад помочь. Если у вас
              есть проект, который вы хотите обсудить, или просто хотите
              пообщаться, не стесняйтесь обращаться ко мне.
            </p>
          </div>
          <Button size="lg" asChild className="mt-4">
            <Link href="/contact">Связаться</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
