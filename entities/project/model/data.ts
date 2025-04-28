import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Website',
    description:
      'A fully responsive e-commerce platform built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'dashboard',
    title: 'Dashboard UI',
    description:
      'An admin dashboard with dark mode, charts, and responsive design.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'TypeScript', 'Chart.js'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Template',
    description:
      'A customizable portfolio template for developers and designers.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'A weather application that shows current conditions and forecasts.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'API Integration', 'CSS'],
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description:
      'A task management application with drag-and-drop functionality.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Redux', 'TypeScript'],
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description:
      'A full-featured blog platform with authentication and comments.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Next.js', 'MongoDB', 'Auth.js'],
  },
];
