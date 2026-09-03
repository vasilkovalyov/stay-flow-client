import {
  PROTECTED_COMMON_PAGES,
  PROTECTED_GUEST_PAGES,
  PROTECTED_HOST_PAGES,
  USER_ACTIVE_MODE,
} from '@/constants';

import { UserActiveModeType } from '@/types';

import { DashboardSidebarNavigationLink } from './dashboard-sidebar-navigation.type';

const NAVIGATION_HOST: DashboardSidebarNavigationLink[] = [
  {
    href: PROTECTED_COMMON_PAGES.dashboard,
    name: 'Overview',
    icon: 'dashboard',
  },
  {
    href: PROTECTED_HOST_PAGES.properties,
    name: 'Properties',
    icon: 'properties',
  },
  {
    href: PROTECTED_HOST_PAGES.addProperty,
    name: 'Add Property',
    icon: 'addProperty',
  },
  {
    href: PROTECTED_HOST_PAGES.bookings,
    name: 'Bookings',
    icon: 'bookings',
  },
  {
    href: PROTECTED_HOST_PAGES.revenue,
    name: 'Revenue',
    icon: 'revenue',
  },
  {
    href: PROTECTED_HOST_PAGES.guests,
    name: 'Guests',
    icon: 'guests',
  },
  {
    href: PROTECTED_HOST_PAGES.reviews,
    name: 'Reviews',
    icon: 'reviews',
  },
  {
    href: PROTECTED_COMMON_PAGES.messages,
    name: 'Messages',
    icon: 'messages',
  },
  {
    href: PROTECTED_COMMON_PAGES.notifications,
    name: 'Notifications',
    icon: 'notifications',
  },
  {
    href: PROTECTED_COMMON_PAGES.security,
    name: 'Security',
    icon: 'security',
  },
  {
    href: PROTECTED_HOST_PAGES.settings,
    name: 'Settings',
    icon: 'settings',
  },
  {
    href: PROTECTED_COMMON_PAGES.deleteAccount,
    name: 'Delete Account',
    icon: 'deleteAccount',
  },
];

const NAVIGATION_GUEST: DashboardSidebarNavigationLink[] = [
  {
    href: PROTECTED_COMMON_PAGES.dashboard,
    name: 'Overview',
    icon: 'dashboard',
  },
  {
    href: PROTECTED_GUEST_PAGES.myTrips,
    name: 'My Trips',
    icon: 'myTrips',
  },
  {
    href: PROTECTED_GUEST_PAGES.savedHomes,
    name: 'Saved Homes',
    icon: 'savedHomes',
  },
  {
    href: PROTECTED_GUEST_PAGES.profile,
    name: 'Profile',
    icon: 'profile',
  },
  {
    href: PROTECTED_GUEST_PAGES.payments,
    name: 'Payments',
    icon: 'payments',
  },
  {
    href: PROTECTED_COMMON_PAGES.messages,
    name: 'Messages',
    icon: 'messages',
  },
  {
    href: PROTECTED_COMMON_PAGES.notifications,
    name: 'Notifications',
    icon: 'notifications',
  },
  {
    href: PROTECTED_COMMON_PAGES.security,
    name: 'Security',
    icon: 'security',
  },
  {
    href: PROTECTED_COMMON_PAGES.deleteAccount,
    name: 'Delete Account',
    icon: 'deleteAccount',
  },
];

export const navigation: Record<UserActiveModeType, DashboardSidebarNavigationLink[]> = {
  [USER_ACTIVE_MODE.GUEST]: NAVIGATION_GUEST,
  [USER_ACTIVE_MODE.HOST]: NAVIGATION_HOST,
};
