import { Github, Linkedin, Mail, MapPin, Phone, Code2, Download, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../utils/constants';
import profile from '../data/profile.json';

const socialLinks = [
  { icon: Github, href: profile.social.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
];

const techStack = ['React.js', 'Angular', 'Node.js', 'FastAPI', 'AWS', 'MongoDB', 'MySQL', 'Elasticsearch'];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const resumeUrl = 'resumeUrl' in profile ? (profile as any).resumeUrl : null;

  return (
    <footer className="border-t border-slate-800/60 bg-slate-900/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand + bio */}
          <div className="sm:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-500/30">
                <Code2 className="h-4 w-4 text-teal-400" />
              </div>
              <span className="text-lg font-bold tracking-tight">{profile.name}</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
              {profile.tagline} — currently based in{' '}
              <span className="text-slate-400">{profile.location}</span>.
            </p>

            {/* Contact quick links */}
            <div className="mt-4 space-y-1.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-teal-400"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                {profile.email}
              </a>
              {'phone' in profile && (
                <a
                  href={`tel:${(profile as any).phone}`}
                  className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-teal-400"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  {(profile as any).phone}
                </a>
              )}
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {profile.location}
              </span>
            </div>

            {/* Social + Resume */}
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-all hover:bg-teal-600 hover:text-white hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  download="Praful_Kumar_Resume.pdf"
                  className="flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-400 transition-all hover:bg-teal-500/20"
                >
                  <Download className="h-3.5 w-3.5" />
                  Resume
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-teal-400"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-800/70 px-2 py-1 text-xs text-slate-400 ring-1 ring-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/60 pt-6 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with{' '}
            <span className="text-teal-500/70">React</span> ·{' '}
            <span className="text-teal-500/70">TypeScript</span> ·{' '}
            <span className="text-teal-500/70">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
