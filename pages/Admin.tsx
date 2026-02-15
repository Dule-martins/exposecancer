
import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { LayoutDashboard, FileText, Settings, Plus, Trash2, Edit, Save, LogOut, Video } from 'lucide-react';
import { BlogPost } from '../types';

const Admin = () => {
  const { state, dispatch } = useCMS();
  const [activeTab, setActiveTab] = useState<'content' | 'posts'>('content');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isAddingPost, setIsAddingPost] = useState(false);

  // Auth simulation
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') setIsAuthenticated(true);
    else alert('Invalid password (Hint: admin123)');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-950 p-4">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-display font-bold text-emerald-900 mb-8 text-center">Admin Access</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Access Token</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                placeholder="Enter admin password"
              />
            </div>
            <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all">
              Initialize Dashboard
            </button>
          </div>
          <p className="mt-6 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
            exposecancer.org management system
          </p>
        </form>
      </div>
    );
  }

  const handleUpdateContent = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_CONTENT', payload: { [field]: value } });
  };

  const handleAddPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: formData.get('title') as string,
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string,
      author: 'Admin',
      date: new Date().toLocaleDateString(),
      image: formData.get('image') as string || 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800',
      tags: (formData.get('tags') as string).split(',').map(t => t.trim())
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
    setIsAddingPost(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-900 text-white hidden lg:flex flex-col">
        <div className="p-8 border-b border-emerald-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Settings className="w-5 h-5 text-emerald-400" /> Control Panel
          </h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'content' ? 'bg-emerald-800 text-emerald-300' : 'hover:bg-emerald-800/50'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Site Content
          </button>
          <button 
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'posts' ? 'bg-emerald-800 text-emerald-300' : 'hover:bg-emerald-800/50'}`}
          >
            <FileText className="w-5 h-5" /> Blog Management
          </button>
        </nav>
        <div className="p-4 border-t border-emerald-800">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-emerald-400 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold text-slate-900">
              {activeTab === 'content' ? 'Site Configuration' : 'Campaign Stories'}
            </h1>
            <p className="text-slate-500">Managing exposecancer.org</p>
          </div>
          {activeTab === 'posts' && (
            <button 
              onClick={() => setIsAddingPost(true)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-200"
            >
              <Plus className="w-5 h-5" /> New Post
            </button>
          )}
        </header>

        {activeTab === 'content' ? (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-8 max-w-4xl">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Hero Title</label>
                <input 
                  type="text" 
                  value={state.content.heroTitle}
                  onChange={(e) => handleUpdateContent('heroTitle', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Hero Subtitle</label>
                <input 
                  type="text" 
                  value={state.content.heroSubtitle}
                  onChange={(e) => handleUpdateContent('heroSubtitle', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Key Note</label>
                <textarea 
                  rows={3}
                  value={state.content.keyNote}
                  onChange={(e) => handleUpdateContent('keyNote', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Introduction</label>
                <textarea 
                  rows={5}
                  value={state.content.introText}
                  onChange={(e) => handleUpdateContent('introText', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Hero Image URL</label>
                  <input 
                    type="text" 
                    value={state.content.heroImage}
                    onChange={(e) => handleUpdateContent('heroImage', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide flex items-center gap-2">
                    <Video className="w-4 h-4" /> Hero Video URL
                  </label>
                  <input 
                    type="text" 
                    value={state.content.heroVideo}
                    onChange={(e) => handleUpdateContent('heroVideo', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Direct link to mp4"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <span className="text-emerald-600 font-bold flex items-center gap-2">
                <Save className="w-4 h-4" /> Changes are auto-saved
              </span>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {state.posts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={post.image} className="w-20 h-20 rounded-xl object-cover" alt="" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
                    <p className="text-slate-500 text-sm">{post.date} • {post.author}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => dispatch({ type: 'DELETE_POST', payload: post.id })}
                    className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* New Post Modal */}
      {isAddingPost && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form 
            onSubmit={handleAddPost}
            className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-3xl font-display font-bold text-emerald-900">Create New Article</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Title</label>
                <input name="title" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none" placeholder="Catchy headline" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Excerpt</label>
                <textarea name="excerpt" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none" rows={2} placeholder="Brief summary" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Content</label>
                <textarea name="content" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none" rows={8} placeholder="Full story content..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Image URL</label>
                  <input name="image" className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none" placeholder="https://..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Tags (comma separated)</label>
                  <input name="tags" className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none" placeholder="Health, Science..." />
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button 
                type="submit" 
                className="flex-grow bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-500"
              >
                Publish Campaign Story
              </button>
              <button 
                type="button" 
                onClick={() => setIsAddingPost(false)}
                className="px-8 py-4 border border-slate-200 rounded-xl font-bold text-slate-500 hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
