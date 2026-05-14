import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="mb-4 rounded-full bg-slate-800 p-4 text-slate-500">
        {icon || <SearchX className="h-8 w-8" />}
      </div>
      <h3 className="text-lg font-semibold text-slate-300">{title}</h3>
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
    </motion.div>
  );
}
