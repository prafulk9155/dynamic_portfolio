import { cn } from '../../utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function Input({ icon, className, ...props }: InputProps) {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{icon}</div>}
      <input
        className={cn(
          'w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50',
          icon ? 'pl-10' : '',
          className
        )}
        {...props}
      />
    </div>
  );
}
