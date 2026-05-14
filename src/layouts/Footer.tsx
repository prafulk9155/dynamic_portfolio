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
    <footer
      className="border-t backdrop-blur-sm"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand + bio */}
          <div className="sm:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-500/30">
                <Code2 className="h-4 w-4 text-teal-500" />
              </div>
              <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {profile.name}
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {profile.tagline} — currently based in{' '}
              <span style={{ color: 'var(--text-primary)' }}>{profile.location}</span>.
            </p>

            {/* Contact */}
            <div className="mt-4 space-y-1.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm transition-colors hover:text-teal-500"
                style={{ color: 'var(--text-muted)' }}
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                {profile.email}
              </a>
              {'phone' in profile && (
                <a
                  href={`tel:${(profile as any).phone}`}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-teal-500"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  {(profile as any).phone}
                </a>
              )}
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-teal-600 hover:text-white hover:scale-105"
                  style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)' }}
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  download="Praful_Kumar_Resume.pdf"
                  className="flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-500 transition-all hover:bg-teal-500/20"
                >
                  <Download className="h-3.5 w-3.5" />
                  Resume
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-sm transition-colors hover:text-teal-500"
                    style={{ color: 'var(--text-muted)' }}
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
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              Tech Stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md px-2 py-1 text-xs ring-1"
                  style={{
                    backgroundColor: 'var(--badge-bg)',
                    color: 'var(--badge-text)',
                    ringColor: 'var(--badge-border)',
                    outline: '1px solid var(--badge-border)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
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
