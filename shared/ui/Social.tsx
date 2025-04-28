import { Button } from './Button';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

export const Social: React.FC = () => {
  return (
    <div className="hidden sm:flex items-center gap-2">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Icon icon="lucide:github" width="24" height="24" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon">
          <Icon icon="lucide:linkedin" width="24" height="24" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon">
          <Icon icon="lucide:twitter" width="24" height="24" />
          <span className="sr-only">Twitter</span>
        </Button>
      </Link>
    </div>
  );
};
