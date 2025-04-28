import React from 'react';
import Image from 'next/image';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Обо мне
            </h2>
            <p className="text-muted-foreground">
              Я увлечённый фронтенд-разработчик с опытом создания красивых,
              адаптивных и удобных для пользователя веб-сайтов. Специализируюсь
              на React, Next.js и современных CSS-фреймворках.
            </p>
            <p className="text-muted-foreground">
              Когда я не пишу код, вы можете найти меня за бутылкой пива =))
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Vladimir Pestov"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
