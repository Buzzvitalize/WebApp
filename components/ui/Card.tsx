import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[24px] border border-white/10 bg-slate-900/75 p-4 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.85)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  );
}
