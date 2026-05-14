import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={ANIMATION_VARIANTS.fadeInUp.initial}
      whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
      viewport={{ once: true }}
      className={centered ? 'text-center' : ''}
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}
