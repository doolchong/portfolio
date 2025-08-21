export interface Project {
  slug: string;
  name: string;
  period: string;
  role: string;
  stack: string;
  summary: string;
  bullets: string[];
  outcomes: string[];
  links: { repo?: string; post?: string };
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  extraImages?: { src: string; alt?: string; caption?: string }[];
}

export interface PostItem {
  title: string;
  date: string;
  href: string;
}
