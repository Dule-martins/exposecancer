
import React from 'react';
import { useCMS } from '../context/CMSContext';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { state } = useCMS();

  return (
    <div className="bg-emerald-50 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-emerald-900 mb-4">The Campaign Blog</h1>
          <p className="text-emerald-700 text-lg">Updates, research, and voices for health freedom.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {state.posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-emerald-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </div>
                </div>
                
                <h2 className="text-2xl font-display font-bold text-emerald-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-500 transition-colors"
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
