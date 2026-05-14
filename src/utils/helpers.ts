import { CATEGORY_COLORS, STATUS_COLORS } from './constants';

export function getStatusColor(status: string): string {
  return STATUS_COLORS[status] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
}

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

export function getAllCategories(projects: { category: string[] }[]): string[] {
  const categories = new Set<string>();
  projects.forEach((p) => p.category.forEach((c) => categories.add(c)));
  return Array.from(categories).sort();
}

export function getAllTechStacks(projects: { techStack: string[] }[]): string[] {
  const stacks = new Set<string>();
  projects.forEach((p) => p.techStack.forEach((t) => stacks.add(t)));
  return Array.from(stacks).sort();
}

export function filterProjects(
  projects: any[],
  { search, category, techStack, status }: { search?: string; category?: string; techStack?: string; status?: string }
): any[] {
  return projects.filter((project) => {
    const matchesSearch =
      !search ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = !category || project.category.includes(category);
    const matchesTechStack = !techStack || project.techStack.includes(techStack);
    const matchesStatus = !status || project.status === status;

    return matchesSearch && matchesCategory && matchesTechStack && matchesStatus;
  });
}

export function sortProjects(projects: any[], sortBy: string): any[] {
  const sorted = [...projects];
  switch (sortBy) {
    case 'latest':
      return sorted.sort((a, b) => b.id - a.id);
    case 'oldest':
      return sorted.sort((a, b) => a.id - b.id);
    case 'featured':
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    default:
      return sorted;
  }
}

export function paginate<T>(items: T[], page: number, perPage: number): { data: T[]; totalPages: number } {
  const totalPages = Math.ceil(items.length / perPage);
  const start = (page - 1) * perPage;
  return { data: items.slice(start, start + perPage), totalPages };
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
