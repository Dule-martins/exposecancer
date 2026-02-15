
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CMSProvider } from './context/CMSContext';

const Home = React.lazy(() => import('./pages/Home'));
const Truth = React.lazy(() => import('./pages/Truth'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Admin = React.lazy(() => import('./pages/Admin'));

const App: React.FC = () => {
  return (
    <CMSProvider>
      <Router>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-emerald-50">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/truth" element={<Layout><Truth /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
      </Router>
    </CMSProvider>
  );
};

export default App;
