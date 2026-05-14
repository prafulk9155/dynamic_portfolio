import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import profile from '../../data/profile.json';
import { ANIMATION_VARIANTS } from '../../utils/constants';

export default function SkillsSection() {
  return (
    <section className="border-t border-slate-800/50 bg-slate-900/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills & Technologies" subtitle="Tools and technologies I work with daily" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-700/50 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-teal-500/10 hover:text-teal-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
