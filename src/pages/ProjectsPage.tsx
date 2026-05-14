import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProjectCard from '../components/cards/ProjectCard';
import EmptyState from '../components/ui/EmptyState';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import projects from '../data/projects.json';
import { getAllCategories, getAllTechStacks, filterProjects, sortProjects, paginate, getCategoryColor } from '../utils/helpers';
import { PROJECTS_PER_PAGE, SORT_OPTIONS } from '../utils/constants';
import { useDebounce } from '../hooks/useDebounce';

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

  const categories = useMemo(() => getAllCategories(projects), []);
  const techStacks = useMemo(() => getAllTechStacks(projects), []);

  const filtered = useMemo(() => {
    const result = filterProjects(projects, {
      search: debouncedSearch,
      category: selectedCategory,
      techStack: selectedTech,
      status: selectedStatus,
    });
    return sortProjects(result, sortBy);
  }, [debouncedSearch, selectedCategory, selectedTech, selectedStatus, sortBy]);

  const { data: paginated, totalPages } = paginate(filtered, page, PROJECTS_PER_PAGE);

  const hasActiveFilters = selectedCategory || selectedTech || selectedStatus;

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedTech('');
    setSelectedStatus('');
    setSearch('');
    setPage(1);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="All Projects" subtitle="Browse through my complete portfolio of work" />

        <div className="mt-10 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex-1">
              <Input
                icon={<Search className="h-4 w-4" />}
                placeholder="Search projects by name or description..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={showFilters ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 focus:border-teal-500 focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-300">Filters</h3>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300">
                    <X className="h-3 w-3" /> Clear all
                  </button>
                )}
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500">Category</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => { setSelectedCategory(''); setPage(1); }}
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                        !selectedCategory ? 'border-teal-500 bg-teal-500/10 text-teal-400' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(selectedCategory === cat ? '' : cat); setPage(1); }}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                          selectedCategory === cat ? getCategoryColor(cat) : 'border-slate-700 text-slate-400 hover:border-slate-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500">Tech Stack</label>
                  <select
                    value={selectedTech}
                    onChange={(e) => { setSelectedTech(e.target.value); setPage(1); }}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-300 focus:border-teal-500 focus:outline-none"
                  >
                    <option value="">All Technologies</option>
                    {techStacks.map((tech) => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500">Status</label>
                  <div className="flex gap-2">
                    {['', 'Completed', 'In Progress', 'Archived'].map((status) => (
                      <button
                        key={status}
                        onClick={() => { setSelectedStatus(status); setPage(1); }}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                          selectedStatus === status
                            ? 'border-teal-500 bg-teal-500/10 text-teal-400'
                            : 'border-slate-700 text-slate-400 hover:border-slate-600'
                        }`}
                      >
                        {status || 'All'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Active:</span>
              {selectedCategory && (
                <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 cursor-pointer" onClick={() => { setSelectedCategory(''); setPage(1); }}>
                  {selectedCategory} <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
              {selectedTech && (
                <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 cursor-pointer" onClick={() => { setSelectedTech(''); setPage(1); }}>
                  {selectedTech} <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
              {selectedStatus && (
                <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 cursor-pointer" onClick={() => { setSelectedStatus(''); setPage(1); }}>
                  {selectedStatus} <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-slate-500">
          <span>{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</span>
        </div>

        {paginated.length === 0 ? (
          <EmptyState title="No projects found" description="Try adjusting your search or filters" />
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
                  p === page ? 'bg-teal-600 text-white' : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                {p}
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
