import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Social } from '@/shared/ui/Social';
import { NavMenu } from './Nav';
import { ThemeToggle } from '@/features/theme/ui/ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Icon icon="lucide:frame" width="24" height="24" />
            <span className="hidden sm:inline-block">Vladimir Pestov</span>
          </Link>
          <NavMenu aria-label="Navigation Menu" />
        </div>
        <div className="flex items-center gap-2">
          <Social /> <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
