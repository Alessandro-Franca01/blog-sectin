export enum PageView {
  HOME = 'home',
  ABOUT = 'about',
}

export interface Article {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: 'rocket' | 'eye' | 'heart';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  phone: string;
  hours: string;
  email: string;
}