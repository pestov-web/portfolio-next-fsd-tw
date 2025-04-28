import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/Card';
import type { Project } from '../model/types';

interface ProjectCardProps extends Project {
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link href={link}>
            Подробнее{' '}
            <Icon
              icon="lucide:arrow-right"
              width="24"
              height="24"
              className="ml-2"
            />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
