
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  keyNote: string;
  introText: string;
  vision: string;
  mission: string;
  note: string;
  heroImage: string;
  heroVideo: string;
}

export interface CMSState {
  posts: BlogPost[];
  content: SiteContent;
}

export type CMSAction =
  | { type: 'UPDATE_CONTENT'; payload: Partial<SiteContent> }
  | { type: 'ADD_POST'; payload: BlogPost }
  | { type: 'DELETE_POST'; payload: string }
  | { type: 'UPDATE_POST'; payload: BlogPost };
