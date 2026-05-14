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
    <div className="min-h-screen bg-theme-base text-theme-primary transition-colors duration-300">
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
