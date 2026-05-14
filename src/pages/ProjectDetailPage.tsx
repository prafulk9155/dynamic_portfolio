import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Users, Clock, User, AlertTriangle, Rocket } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import ProjectCard from '../components/cards/ProjectCard';
import projects from '../data/projects.json';
import { getStatusColor, getCategoryColor } from '../utils/helpers';
import { ANIMATION_VARIANTS } from '../utils/constants';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20">
        <EmptyState title="Project not found" description="The project you're looking for doesn't exist." />
        <div className="text-center">
          <Link to="/projects"><Button variant="outline">Back to Projects</Button></Link>
        </div>
      </div>
    );
  }

  const related = projects.filter((p) => p.id !== project.id && p.category.some((c) => project.category.includes(c))).slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={ANIMATION_VARIANTS.fadeInUp.initial} animate={ANIMATION_VARIANTS.fadeInUp.animate}>
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
            <div className="relative h-64 sm:h-80">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  {project.featured && <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Featured</Badge>}
                </div>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h1>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="flex flex-wrap gap-2">
                {project.category.map((cat) => (
                  <Badge key={cat} className={getCategoryColor(cat)}>{cat}</Badge>
                ))}
              </div>

              <p className="text-base leading-relaxed text-slate-400">{project.fullDescription}</p>

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button><Github className="h-4 w-4" /> View Source</Button>
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline"><ExternalLink className="h-4 w-4" /> Live Demo</Button>
                  </a>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <InfoItem icon={User} label="Role" value={project.role} />
                <InfoItem icon={Users} label="Team Size" value={project.teamSize} />
                <InfoItem icon={Clock} label="Timeline" value={project.timeline} />
                <InfoItem icon={AlertTriangle} label="Status" value={project.status} />
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-200">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-lg bg-slate-700/50 px-3 py-1.5 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-200">Features</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {project.screenshots && project.screenshots.length > 0 && (
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-200">Screenshots</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.screenshots.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="rounded-lg border border-slate-700/50"
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-200">Challenges Solved</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2 text-sm text-slate-400">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.futureImprovements && project.futureImprovements.length > 0 && (
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-200">Future Improvements</h3>
                  <ul className="space-y-2">
                    {project.futureImprovements.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold text-slate-100">Related Projects</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
      <div className="mb-1 flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4" />
        <span className="text-xs uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-sm font-medium text-slate-200">{value}</div>
    </div>
  );
}
