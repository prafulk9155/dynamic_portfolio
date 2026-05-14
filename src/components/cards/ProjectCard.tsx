import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import { getStatusColor, getCategoryColor, truncate } from '../../utils/helpers';
import { ANIMATION_VARIANTS } from '../../utils/constants';

interface ProjectCardProps {
  project: {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    category: string[];
    techStack: string[];
    status: string;
    thumbnail: string;
    github: string;
    liveDemo: string;
    featured: boolean;
  };
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={ANIMATION_VARIANTS.fadeInUp.initial}
      whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5"
    >
      {project.featured && (
        <div className="absolute right-3 top-3 z-10">
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Featured</Badge>
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-teal-400">
            {project.title}
          </h3>
          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          {truncate(project.shortDescription, 120)}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.category.slice(0, 3).map((cat) => (
            <Badge key={cat} className={getCategoryColor(cat)}>{cat}</Badge>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-md bg-slate-700/50 px-2 py-0.5 text-xs text-slate-400">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-md bg-slate-700/50 px-2 py-0.5 text-xs text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-700 hover:text-slate-300"
                aria-label="View source code"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-700 hover:text-slate-300"
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-teal-500 transition-colors hover:text-teal-400"
          >
            Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
