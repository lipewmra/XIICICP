export type ActiveScreen = 'abertura' | 'home' | 'agenda' | 'convidados' | 'sobre_jp' | 'sobre_ufpb' | 'coordenacao' | 'slide_details';

export interface AlertMarqueeItem {
  id: string;
  text: string;
}

export interface AlertMarquee {
  enabled: boolean;
  text: string;
  badgeText: string;
  items?: AlertMarqueeItem[];
}

export interface HeroSlide {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  detailsText?: string;
}

export interface LetterOfPresentation {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface QuickActionItem {
  id: string;
  title: string;
  icon: string; // Name of Lucide icon
  url: string;
  color: string;
}

export interface AnnouncementItem {
  id: string;
  date: string;
  title: string;
  text: string;
  urgent: boolean;
}

export interface ScheduleEvent {
  id: string;
  day: 1 | 2 | 3;
  time: string;
  title: string;
  speaker?: string;
  roomString: string;
  type: 'lecture' | 'panel' | 'break' | 'cultural' | 'workshop';
  description?: string;
}

export interface GuestSpeaker {
  id: string;
  name: string;
  type: 'nacional' | 'internacional';
  institution: string;
  topic: string;
  imageUrl: string;
  lattesUrl?: string;
  publications?: string[];
  bio: string;
}

export interface TourismSpot {
  id: string;
  title: string;
  category: 'Praia & Natureza' | 'Histórico' | 'Cultura';
  description: string;
  imageUrl: string;
  tips: string;
}

export interface UfpbVenue {
  id: string;
  title: string;
  description: string;
  capacity?: string;
  photoUrl: string;
  locationInfo: string;
}

export interface PartnerService {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  institution: string;
  role: 'geral' | 'cientifico' | 'organizador';
}

export interface ColoquioDataState {
  marquee: AlertMarquee;
  heroSlides: HeroSlide[];
  letter: LetterOfPresentation;
  quickActions: QuickActionItem[];
  announcements: AnnouncementItem[];
  schedule: ScheduleEvent[];
  speakers: GuestSpeaker[];
  spots: TourismSpot[];
  venues: UfpbVenue[];
  services: PartnerService[];
  committee: CommitteeMember[];
}
