import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../cards/ProjectCard';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import projects from '../../data/projects.json';
import { ANIMATION_VARIANTS } from '../../utils/constants';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my best work across different domains"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link to="/projects">
            <Button variant="outline">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
