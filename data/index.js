import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Wallet, 
  BarChart3, 
  Bell, 
  Settings, 
  CircleHelp
} from 'lucide-react';


export const navigationItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard'
    },
    // {
    //   title: 'Customers',
    //   icon: Users,
    //   href: '/customers',
    //   hasSubmenu: true,
    //   isOpen: isCustomersOpen,
    //   submenuItems: [
    //     { title: 'Badges', href: '/customers/badges', isActive: true },
    //     { title: 'Customers Logs', href: '/customers/logs' },
    //     { title: 'Gift Vouchers', href: '/customers/vouchers' }
    //   ]
    // },
    {
    title: 'Customers',
    icon: Users,
    href: '/customers',
    hasSubmenu: true,
    submenuItems: [
      { title: 'Badges', href: '/customers/badges', isActive: true },
      { title: 'Customers Logs', href: '/customers/logs' },
      { title: 'Gift Vouchers', href: '/customers/vouchers' }
    ]
    },
    {
      title: 'File',
      icon: FileText,
      href: '/file'
    },
    {
      title: 'Wallet',
      icon: Wallet,
      href: '/wallet'
    },
    {
      title: 'Reporting',
      icon: BarChart3,
      href: '/reporting'
    },
    {
      title: 'Notification',
      icon: Bell,
      href: '/notification'
    }
];

export const bottomItems = [
    {
      title: 'Help',
      icon: CircleHelp,
      href: '/logout'
    },
    {
      title: 'Settings',
      icon: Settings,
      href: '/settings'
    }
];
