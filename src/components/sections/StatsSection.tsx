import { motion } from 'framer-motion';
import { Code2, Users, Briefcase, GitCommitHorizontal } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import profile from '../../data/profile.json';
import { ANIMATION_VARIANTS } from '../../utils/constants';

const statItems = [
  { label: 'Projects Completed', value: profile.stats.projectsCompleted, icon: Code2 },
  { label: 'Years Experience', value: profile.stats.yearsExperience, icon: Briefcase },
  { label: 'Clients Worked With', value: profile.stats.clientsWorkedWith, icon: Users },
  { label: 'Open Source Contributions', value: profile.stats.openSourceContributions, icon: GitCommitHorizontal },
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="By the Numbers" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 text-center backdrop-blur-sm transition-all hover:border-teal-500/30"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 transition-colors group-hover:bg-teal-500/20">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-slate-100">{stat.value}+</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
