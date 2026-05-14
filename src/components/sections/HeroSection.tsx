import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import profile from '../../data/profile.json';
import { ANIMATION_VARIANTS } from '../../utils/constants';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={ANIMATION_VARIANTS.fadeInUp.initial}
            animate={ANIMATION_VARIANTS.fadeInUp.animate}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400"
            >
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              Available for work
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-teal-400 sm:text-2xl">{profile.title}</p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-400">{profile.tagline}</p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">{profile.bio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects">
                <Button size="lg">View Projects</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Get in Touch</Button>
              </Link>
              {'resumeUrl' in profile && (profile as any).resumeUrl && (
                <a
                  href={(profile as any).resumeUrl}
                  download="Praful_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600/50 bg-slate-800/50 px-5 py-2.5 text-base font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-teal-500/40 hover:bg-slate-700/50 hover:text-teal-400"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              )}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-80 w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 blur-2xl" />
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative h-full w-full rounded-full object-cover ring-2 ring-slate-700/50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-slate-600" />
      </motion.div>
    </section>
  );
}
