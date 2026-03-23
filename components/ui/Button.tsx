import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

const variantStyles = {
  primary: 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400',
  secondary: 'bg-slate-800/80 text-slate-100 hover:bg-slate-700/80',
  accent: 'bg-violet-500 text-white hover:bg-violet-400',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantStyles;
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-lg shadow-slate-950/10 transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-300/80 disabled:cursor-not-allowed disabled:opacity-50',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
