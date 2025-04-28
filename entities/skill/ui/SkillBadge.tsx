import type { ReactNode } from 'react';
import { Badge } from '@/shared/ui/Badge';

interface SkillBadgeProps {
  name: string;
  icon: ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="text-sm py-2 px-4 flex items-center justify-center"
    >
      {icon} {name}
    </Badge>
  );
}
