import React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button';
import { BlogPostCard } from '@/entities/blog/ui/BlogPostCard';
import { Icon } from '@iconify/react';
import { blogPosts } from '@/entities/blog/model/data';

export const BlogSection: React.FC = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Последнее из блога
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Я пишу о веб-разработке, дизайне и моем опыте в качестве
              разработчика.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {latestPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                {...post}
                slug={`/blog/${post.slug}`}
              />
            ))}
          </div>
          <Button variant="outline" asChild className="mt-8">
            <Link href="/blog">
              Читайте все посты{' '}
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
