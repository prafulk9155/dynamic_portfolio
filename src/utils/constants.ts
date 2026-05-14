export const SITE_CONFIG = {
  name: 'Alex Chen',
  title: 'Portfolio | Alex Chen',
  description: 'Full Stack Developer & AI Engineer - Building intelligent software that solves real problems',
  url: 'https://alexchen.dev',
  ogImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PROJECTS_PER_PAGE = 6;

export const STATUS_COLORS: Record<string, string> = {
  'Completed': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'In Progress': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Archived': 'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

export const CATEGORY_COLORS: Record<string, string> = {
  'AI': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Education': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'SaaS': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  'DevOps': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Developer Tools': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  'Full Stack': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  'E-Commerce': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Communication': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  'Productivity': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'Creative Tools': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Health': 'bg-lime-500/20 text-lime-400 border-lime-500/30',
  'Mobile': 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30',
  'Cloud': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'IoT': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Fintech': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Backend': 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'featured', label: 'Featured' },
] as const;

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
} as const;
