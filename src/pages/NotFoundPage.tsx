import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { ANIMATION_VARIANTS } from '../utils/constants';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          animate={ANIMATION_VARIANTS.fadeInUp.animate}
        >
          <div className="mb-6 text-8xl font-bold text-slate-800">404</div>
          <h1 className="text-2xl font-bold text-slate-200">Page Not Found</h1>
          <p className="mt-2 text-slate-500">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/">
              <Button><Home className="h-4 w-4" /> Go Home</Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" /> Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
