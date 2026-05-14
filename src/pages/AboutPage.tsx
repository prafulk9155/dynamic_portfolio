import { motion } from 'framer-motion';
import { Code2, Brain, Cloud, GitBranch, MapPin, Mail, Calendar } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import profile from '../data/profile.json';
import { ANIMATION_VARIANTS } from '../utils/constants';

const serviceIcons: Record<string, React.ElementType> = {
  code: Code2,
  brain: Brain,
  cloud: Cloud,
  'git-branch': GitBranch,
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My journey, skills, and what I can offer" />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={ANIMATION_VARIANTS.fadeInUp.initial}
            whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
              <div className="relative h-48">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100">{profile.name}</h3>
                <p className="text-sm text-teal-400">{profile.title}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="h-4 w-4 text-slate-500" /> {profile.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Mail className="h-4 w-4 text-slate-500" /> {profile.email}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{profile.bio}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={ANIMATION_VARIANTS.fadeInUp.initial}
            whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-slate-200">My Journey</h3>
              <div className="relative space-y-0">
                {profile.journey.map((item, i) => (
                  <div key={item.year} className="flex gap-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-xs font-bold text-teal-400">
                        {item.year.slice(2)}
                      </div>
                      {i < profile.journey.length - 1 && (
                        <div className="h-full w-px bg-slate-700" />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className="text-xs font-medium text-teal-400">{item.year}</div>
                      <div className="text-sm text-slate-400">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-slate-200">Experience</h3>
              <div className="space-y-4">
                {profile.experience.map((exp) => (
                  <div key={exp.role + exp.company} className="rounded-lg border border-slate-700/30 bg-slate-800/30 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-slate-200">{exp.role}</h4>
                        <p className="text-sm text-teal-400">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" /> {exp.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-center text-xl font-semibold text-slate-200">Services I Offer</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profile.services.map((service, i) => {
              const Icon = serviceIcons[service.icon] || Code2;
              return (
                <motion.div
                  key={service.title}
                  initial={ANIMATION_VARIANTS.fadeInUp.initial}
                  whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 text-center backdrop-blur-sm transition-all hover:border-teal-500/30"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 transition-colors group-hover:bg-teal-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium text-slate-200">{service.title}</h4>
                  <p className="mt-2 text-sm text-slate-500">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-center text-xl font-semibold text-slate-200">Skills</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profile.skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={ANIMATION_VARIANTS.fadeInUp.initial}
                whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm"
              >
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-400">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-lg bg-slate-700/50 px-3 py-1.5 text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
