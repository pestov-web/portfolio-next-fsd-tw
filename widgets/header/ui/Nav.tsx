import Link from 'next/link';
import { NavMenuItems } from '@/shared/config/navMenu';
import React from 'react';

export const NavMenu: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
      {NavMenuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          aria-label={item.alt}
          className="transition-colors hover:text-foreground/80"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
