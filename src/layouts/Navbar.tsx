import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, Braces } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';
import { cn } from '../utils/helpers';
import profile from '../data/profile.json';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const firstName = profile.name.split(' ')[0];
const lastName = profile.name.split(' ')[1];
const resumeUrl = 'resumeUrl' in profile ? (profile as any).resumeUrl : null;

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolled
            ? isDark
              ? 'border-b border-slate-700/40 bg-slate-900/90 shadow-xl shadow-black/20 backdrop-blur-2xl'
              : 'border-b border-slate-200/60 bg-white/90 shadow-md shadow-slate-200/40 backdrop-blur-2xl'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo / Brand */}
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-500/30 transition-all group-hover:bg-teal-500/25 group-hover:ring-teal-400/50">
              <Braces className="h-4 w-4 text-teal-500" />
            </div>
            <div className="flex items-baseline gap-1 text-lg font-bold tracking-tight">
              <span className={cn(
                'transition-colors',
                isDark ? 'text-slate-100 group-hover:text-white' : 'text-slate-800 group-hover:text-slate-900'
              )}>
                {firstName}
              </span>
              <span className="text-teal-500">{lastName}</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-teal-500'
                      : isDark
                        ? 'text-slate-400 hover:text-slate-100'
                        : 'text-slate-500 hover:text-slate-900'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className={cn(
                        'absolute inset-0 rounded-lg ring-1',
                        isDark
                          ? 'bg-teal-500/10 ring-teal-500/20'
                          : 'bg-teal-500/10 ring-teal-500/30'
                      )}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {resumeUrl && (
              <a
                href={resumeUrl}
                download="Praful_Kumar_Resume.pdf"
                className="hidden items-center gap-1.5 rounded-lg border border-teal-500/40 bg-teal-500/10 px-3.5 py-1.5 text-sm font-medium text-teal-500 transition-all hover:bg-teal-500/20 hover:border-teal-500/60 md:flex"
                aria-label="Download Resume"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </a>
            )}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                'rounded-lg p-2 transition-all',
                isDark
                  ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              )}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'rounded-lg p-2 transition-all md:hidden',
                isDark
                  ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed inset-x-0 top-16 z-30 border-b backdrop-blur-2xl md:hidden',
              isDark
                ? 'border-slate-700/50 bg-slate-900/97'
                : 'border-slate-200/60 bg-white/97'
            )}
          >
            {/* Role badge */}
            <div className={cn(
              'border-b px-4 py-3',
              isDark ? 'border-slate-800/60' : 'border-slate-100'
            )}>
              <p className={cn('text-xs', isDark ? 'text-slate-500' : 'text-slate-400')}>
                {profile.title.split('|')[0].trim()}
              </p>
            </div>

            <div className="space-y-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'bg-teal-500/10 text-teal-500 ring-1 ring-teal-500/20'
                      : isDark
                        ? 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'
                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {resumeUrl && (
              <div className={cn(
                'border-t px-4 py-3',
                isDark ? 'border-slate-800/60' : 'border-slate-100'
              )}>
                <a
                  href={resumeUrl}
                  download="Praful_Kumar_Resume.pdf"
                  className="flex items-center justify-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-2.5 text-sm font-medium text-teal-500 transition-colors hover:bg-teal-500/20"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
