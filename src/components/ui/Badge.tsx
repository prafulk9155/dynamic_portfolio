import { cn } from '../../utils/helpers';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Badge({ children, className, onClick }: BadgeProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </span>
  );
}
