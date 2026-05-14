import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../components/ui/ScrollProgress';
import BackToTop from '../components/ui/BackToTop';

interface LayoutProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Layout({ theme, toggleTheme }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
