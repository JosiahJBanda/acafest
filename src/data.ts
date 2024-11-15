import { Team } from './types';

export const teams: Team[] = [
  {
    id: '1',
    name: 'Vocal Harmony',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800',
    description: 'Known for their intricate harmonies and contemporary arrangements, Vocal Harmony pushes the boundaries of traditional acappella.',
    origin: 'Boston, MA',
    yearFormed: 2018,
    members: 8,
    achievements: ['National Harmony Award 2022', 'Best Contemporary Performance 2023'],
    performances: [
      {
        id: 'p1',
        teamId: '1',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        category: 'contemporary',
        title: 'Bohemian Rhapsody Reimagined'
      }
    ]
  },
  {
    id: '2',
    name: 'Classical Voices',
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800',
    description: 'A prestigious ensemble dedicated to preserving and reimagining classical compositions through the power of human voice.',
    origin: 'Vienna, Austria',
    yearFormed: 2015,
    members: 12,
    achievements: ['European Choral Excellence Award', 'Classical Innovation Prize'],
    performances: [
      {
        id: 'p2',
        teamId: '2',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        category: 'classical',
        title: 'Ave Maria - Modern Take'
      }
    ]
  },
  {
    id: '3',
    name: 'Jazz Junction',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800',
    description: 'Bringing the soul of jazz to acappella, this dynamic group creates unforgettable vocal jazz experiences.',
    origin: 'New Orleans, LA',
    yearFormed: 2019,
    members: 6,
    achievements: ['Jazz Vocal Award 2023', 'Best Jazz Arrangement'],
    performances: [
      {
        id: 'p3',
        teamId: '3',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        category: 'jazz',
        title: 'Take Five Vocals'
      }
    ]
  }
];