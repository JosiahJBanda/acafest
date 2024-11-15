export interface Performance {
  id: string;
  teamId: string;
  videoUrl: string;
  category: 'classical' | 'contemporary' | 'jazz';
  title: string;
  viewCount: number;
}

export interface Team {
  id: string;
  name: string;
  image: string;
  description: string;
  origin: string;
  yearFormed: number;
  performances: Performance[];
  members: number;
  achievements: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface Vote {
  userId: string;
  performanceId: string;
  category: string;
  timestamp: number;
}

export interface VoteAnalytics {
  performanceId: string;
  totalVotes: number;
  categoryRank: number;
}