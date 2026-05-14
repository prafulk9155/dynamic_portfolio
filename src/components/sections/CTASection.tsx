import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { ANIMATION_VARIANTS } from '../../utils/constants';

export default function CTASection() {
  return (
    <section className="border-t border-slate-800/50 bg-slate-900/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 text-center backdrop-blur-sm sm:p-12"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-teal-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/5 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
              <Sparkles className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">Let's Build Something Amazing</h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Have a project in mind? I'm always open to discussing new opportunities and ideas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact">
                <Button size="lg">Start a Conversation <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">Browse Projects</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
