import { cn } from '../../utils/helpers';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-slate-700/50', className)}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 p-0">
      <Skeleton className="h-48 w-full" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}
