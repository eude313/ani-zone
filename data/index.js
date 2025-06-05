import { 
  House, Calendar, Folder, Compass, Monitor, 
  MessageSquare, Settings, CircleHelp, Sun, Moon,

  Sword, Map, Car, Laugh, Brain, Flame, Drama, Eye, Sparkles,
  Gamepad2, Users, Scroll, Skull, Orbit, Flower, Baby, Wand, 
  HandMetal, Bot, Shield, Music, Search, Theater, BadgeCheck,
  Activity, Heart, Landmark, BookOpen, Atom, Cigarette, Star, Venus, 
  Mars, Coffee, Rocket, Trophy, Zap, Ghost, UtensilsCrossed, Droplet
} from 'lucide-react';


export const navigationItems = [
  {
    title: 'Home',
    icon: House,
    hasSubmenu: true,
    submenuItems: [
      { 
        title: 'Anime', 
        href: '/anime',
        dotColor: 'bg-red-500'
      },
      { 
        title: 'Manga', 
        href: '/manga',
        dotColor: 'bg-green-500'
      }
    ]
  },
  {
    title: 'Explore',
    icon: Compass,
    href: '/explore'
  },
  {
    title: 'Events',
    icon: Calendar,
    href: '/event'
  },
  {
    title: 'Library',
    icon: Folder,
    href: '/library'
  },
  {
    title: 'Community',
    icon: MessageSquare,
    href: '/community'
  }
];

export const bottomItems = [
  {
    title: 'Help',
    icon: CircleHelp,
    href: '/help'
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings'
  }
];

export const movies = [
    {
      id: 1,
      title: "Fantastic Beasts: The Secrets of Dumbledore",
      description: "Professor Albus Dumbledore knows the powerful dark wizard Gellert Grindelwald is moving to seize control of the wizarding world.",
      image: "/4b87b51538547599d2d23071ef011c53.jpg",
      tag: "LIVE"
    },
    {
      id: 2,
      title: "The Batman",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
      image: "/Images/acc94741304eab75c76352042e6e5d8a.jpg",
      tag: "NEW"
    },
    {
      id: 3,
      title: "Doctor Strange in the Multiverse of Madness",
      description: "Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse and unleashes a threat too great to handle.",
      image: "/Images/7ac24f55b87f9606c6d936a07b0067b5.jpg",
      tag: "TRENDING"
    },
    {
      id: 4,
      title: "The Demon slayer",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
      image: "/Images/975364bd02272db5d2b3037132c62eb6.jpg",
      tag: "NEW"
    }
];

export const genres = [
  { id: 1, name: "All", icon: null, isDefault: true },
  { id: 2, name: "Action", icon: Sword},
  { id: 3, name: "Adventure", icon: Map},
  { id: 4, name: "Cars", icon: Car},
  { id: 5, name: "Comedy", icon: Laugh},
  { id: 6, name: "Dementia", icon: Brain},
  { id: 7, name: "Demons", icon: Flame},
  { id: 8, name: "Drama", icon: Drama},
  { id: 9, name: "Ecchi", icon: Eye},
  { id: 10, name: "Fantasy", icon: Sparkles},
  { id: 11, name: "Game", icon: Gamepad2},
  { id: 12, name: "Harem", icon: Users},
  { id: 13, name: "Historical", icon: Scroll},
  { id: 14, name: "Horror", icon: Skull},
  { id: 15, name: "Isekai", icon: Orbit},
  { id: 16, name: "Josei", icon: Flower},
  { id: 17, name: "Kids", icon: Baby},
  { id: 18, name: "Magic", icon: Wand},
  { id: 19, name: "Martial Arts", icon: HandMetal},
  { id: 20, name: "Mecha", icon: Bot},
  { id: 21, name: "Military", icon: Shield},
  { id: 22, name: "Music", icon: Music},
  { id: 23, name: "Mystery", icon: Search},
  { id: 24, name: "Parody", icon: Theater},
  { id: 25, name: "Police", icon: BadgeCheck},
  { id: 26, name: "Psychological", icon: Activity},
  { id: 27, name: "Romance", icon: Heart},
  { id: 28, name: "Samurai", icon: Landmark},
  { id: 29, name: "School", icon: BookOpen},
  { id: 30, name: "Sci-Fi", icon: Atom},
  { id: 31, name: "Seinen", icon: Cigarette},
  { id: 32, name: "Shoujo", icon: Star},
  { id: 33, name: "Shoujo Ai", icon: Venus},
  { id: 34, name: "Shounen", icon: Zap},
  { id: 35, name: "Shounen Ai", icon: Mars},
  { id: 36, name: "Slice of Life", icon: Coffee},
  { id: 37, name: "Space", icon: Rocket},
  { id: 38, name: "Sports", icon: Trophy},
  { id: 39, name: "Super Power", icon: Zap},
  { id: 40, name: "Supernatural", icon: Ghost},
  { id: 41, name: "Thriller", icon: UtensilsCrossed},
  { id: 42, name: "Vampire", icon: Droplet},
];


export const themes = [
  {
    id: 'light',
    title: 'Light theme',
    description: 'This theme will activate when your system is set to light mode',
    icon: Sun,
    imageUrl: '/Images/Screenshot from 2025-06-04 14-56-31.png',
    bottomText: 'Default light'
  },
  {
    id: 'dark',
    title: 'Dark theme', 
    description: 'This theme will activate when your system is set to dark mode',
    icon: Moon,
    imageUrl: '/Images/Screenshot from 2025-06-04 14-57-48.png',
    bottomText: 'Default dark'
  },
  {
    id: 'system',
    title: 'System',
    description: 'This is the theme that will take it your system is using',
    icon: Monitor,
    imageUrl: '/Images/Screenshot from 2025-06-04 14-58-03.png',
    bottomText: 'Default system'
  }
];