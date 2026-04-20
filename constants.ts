
import { BlogPost, SiteContent } from './types';

export const INITIAL_CONTENT: SiteContent = {
  heroTitle: "EXPOSING THE TRUTH ABOUT CANCER",
  heroSubtitle: "(A Global campaign to overcome cancer today)",
  keyNote: "<span>DRUGS ARE USELESS TO CANCER</span> <br> The popular synthetic medicines today (Drugs) are useless to cancer as a disease; simply because, they cannot deal with intracellular diseases,lacking the ability to carry out the safe and effective selective cytotoxicity required as treatment for the cure. The very reason mankind is still struggling with viruses.",
  introText: "No doubt, to the dismay and even consternation of those taking undue advantage of the people's ignorance of the truth about cancer, to easily deceive and massively exploit mankind financially, through the so called treatments for cancer presently; it is indeed of great importance to expose the truth about cancer for people to know.",
  vision: "The Global Restoration vision (a divine agenda) to bring the much needed Restoration to mankind and the rest of creation, with the Restoration of Health, wealth and the environment as the priority.",
  mission: "The mission is to preserve Creation on the Earth, through deliberate steps to promote the proper and profitable use of Natural resources, in a show of respect for Nature, the key to overcoming the overwhelming global challenges today.",
  note: "Quite sadly, ignorance of the truth about cancer, has simply helped diseases like cancer to become an extremely lucrative business, at the expense of mankind.",
  heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
  heroVideo: "https://cdn.pixabay.com/video/2021/04/12/70881-537442111_tiny.mp4"
};

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "Why Cancer Has Remained Incurable",
    excerpt: "Cancer is said to be incurable, and has sadly remained incurable for so long, simply because of the system of the Global health sector.",
    content: "Cancer is said to be incurable, and has sadly remained incurable for so long, simply because, the system of the Global health sector, known to be under the influence and control of the powers that be, presently making outrageous money from Drugs (synthetic medicines), has ensured that Drugs remain the only acceptable medicines. And in a situation where Drugs are useless to the cure for cancer, it is easy to see why cancer has remained incurable.",
    author: "STILL WATERS INT'L",
    date: new Date().toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1579165466541-7483faaad28b?auto=format&fit=crop&q=80&w=800",
    tags: ["Health", "Truth", "Reform"]
  },
  {
    id: '2',
    title: "The Simple Cure: The Immune System",
    excerpt: "The immune system, particularly the cytotoxic immune cells, has the unique capability to carry out safe and effective selective cytotoxicity.",
    content: "A simple, affordable and sustainable cure for cancer that makes it indeed a solution, is all based on the fact (science) that, the immune system is the key to the cure for intracellular diseases like cancer; because, the immune system, particularly the cytotoxic immune cells have the unique capability to carry out the safe and effective selective cytotoxicity required as treatment for the cure for intracellular diseases like cancer.",
    author: "STILL WATERS INT'L",
    date: new Date().toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    tags: ["Science", "Natural", "Immune System"]
  }
];
