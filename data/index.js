import { 
  House, 
  Radio, 
  Calendar,
  // GalleryVerticalEnd 
  SlidersVertical,
  Folder, 
  Compass, 
  MessageSquare, 
  Settings, 
  CircleHelp
} from 'lucide-react';

export const navigationItems = [
  {
    title: 'Home',
    icon: House,
    href: '/',
    hasSubmenu: true,
    submenuItems: [
      { title: 'Anime', href: '/anime' },
      { title: 'Manga', href: '/manga' }
    ]
  },
  {
    title: 'Types',
    icon: SlidersVertical,
    href: '/customers',
    hasSubmenu: true,
    submenuItems: [
      { title: 'OVAs', href: '/customers/badges', isActive: true },
      { title: 'ONAs', href: '/customers/logs' },
      { title: 'Specials', href: '/customers/vouchers' }
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
