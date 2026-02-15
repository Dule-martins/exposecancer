
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, ShieldAlert } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  // "Admin" removed from visible links to satisfy "not visible to visitor" request
  const links = [
    { name: 'Home', path: '/' },
    { name: 'The Truth', path: '/truth' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className="bg-emerald-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Leaf className="text-emerald-400 w-8 h-8" />
            <Link to="/" className="text-2xl font-display font-bold tracking-tight">
              expose<span className="text-emerald-400">cancer</span>.org
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                    location.pathname === link.path 
                      ? 'bg-emerald-800 text-emerald-300' 
                      : 'hover:bg-emerald-800 text-emerald-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-emerald-800">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-emerald-900 border-t border-emerald-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-emerald-950 text-emerald-200 py-12 border-t border-emerald-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center items-center space-x-2 mb-4">
        {/* Hidden entrance: Clicking the leaf icon in the footer acts as the "secret" way for the manager to access admin */}
        <Link to="/admin" className="hover:opacity-80 transition-opacity">
          <Leaf className="text-emerald-400 w-6 h-6" />
        </Link>
        <span className="text-xl font-display font-bold text-white">ExposeCancer.org</span>
      </div>
      <p className="max-w-2xl mx-auto mb-8 text-sm opacity-80">
        A Global campaign to overcome cancer today. Promoted by STILL WATERS INT'L (Advocates for Nature).
      </p>
      <div className="flex justify-center space-x-6 mb-8 text-sm">
        <Link to="/" className="hover:text-emerald-400">Home</Link>
        <Link to="/truth" className="hover:text-emerald-400">The Truth</Link>
        <Link to="/blog" className="hover:text-emerald-400">Blog</Link>
        {/* "Admin" link removed from visible footer links */}
      </div>
      <div className="text-xs opacity-50">
        &copy; {new Date().getFullYear()} exposecancer.org. All rights reserved.
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
