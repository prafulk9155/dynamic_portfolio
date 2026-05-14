import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { ANIMATION_VARIANTS } from '../../utils/constants';

export default function CTASection() {
  return (
    <section className="cta-section border-t py-20" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-base)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-8 text-center backdrop-blur-sm sm:p-12"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
          }}
        >
          {/* Glow blobs */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-teal-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/5 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500">
              <Sparkles className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Let's Build Something Amazing
            </h2>
            <p className="mx-auto mt-3 max-w-md" style={{ color: 'var(--text-muted)' }}>
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
