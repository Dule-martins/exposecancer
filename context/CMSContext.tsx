
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CMSState, CMSAction, BlogPost, SiteContent } from '../types';
import { INITIAL_CONTENT, INITIAL_POSTS } from '../constants';

const CMSContext = createContext<{
  state: CMSState;
  dispatch: React.Dispatch<CMSAction>;
} | undefined>(undefined);

const cmsReducer = (state: CMSState, action: CMSAction): CMSState => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      return { ...state, content: { ...state.content, ...action.payload } };
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] };
    case 'DELETE_POST':
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload) };
    case 'UPDATE_POST':
      return { ...state, posts: state.posts.map(p => p.id === action.payload.id ? action.payload : p) };
    default:
      return state;
  }
};

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cmsReducer, {
    posts: INITIAL_POSTS,
    content: INITIAL_CONTENT
  }, () => {
    const saved = localStorage.getItem('expose_cancer_cms');
    return saved ? JSON.parse(saved) : { posts: INITIAL_POSTS, content: INITIAL_CONTENT };
  });

  useEffect(() => {
    localStorage.setItem('expose_cancer_cms', JSON.stringify(state));
  }, [state]);

  return (
    <CMSContext.Provider value={{ state, dispatch }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within CMSProvider');
  return context;
};
