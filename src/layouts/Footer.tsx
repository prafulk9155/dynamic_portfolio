import { Github, Linkedin, Twitter, Code2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../utils/constants';

const socialLinks = [
  { icon: Github, href: 'https://github.com/username', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/username', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-slate-100">
              <Code2 className="h-6 w-6 text-teal-500" />
              <span className="text-lg font-bold tracking-tight">Alex Chen</span>
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              Full Stack Developer & AI Engineer building intelligent software that solves real problems.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-teal-600 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-300">Navigation</h3>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-500 transition-colors hover:text-teal-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-300">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="mailto:alex@example.com" className="text-sm text-slate-500 transition-colors hover:text-teal-400">
                  alex@example.com
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-500">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center border-t border-slate-800 pt-6">
          <p className="flex items-center gap-1 text-sm text-slate-600">
            Built with <Heart className="h-3.5 w-3.5 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
