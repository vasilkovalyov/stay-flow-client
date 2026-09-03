import {
  PROTECTED_COMMON_PAGES,
  PROTECTED_GUEST_PAGES,
  PROTECTED_HOST_PAGES,
  USER_ACTIVE_MODE,
} from '@/constants';

import { UserActiveModeType } from '@/types';

import { UserDropdownLink } from './user-dropdown.type';

const DROPDOWN_NAVIGATION_GUEST: UserDropdownLink[] = [
  {
    href: PROTECTED_COMMON_PAGES.dashboard,
    name: 'Dashboard',
    icon: 'dashboard',
  },
  {
    href: PROTECTED_GUEST_PAGES.myTrips,
    name: 'My Trips',
    icon: 'myTrips',
  },
  {
    href: PROTECTED_GUEST_PAGES.savedHomes,
    name: 'Saved homes',
    icon: 'savedHomes',
  },
  {
    href: PROTECTED_GUEST_PAGES.payments,
    name: 'Payments',
    icon: 'payments',
  },
];

const DROPDOWN_NAVIGATION_HOST: UserDropdownLink[] = [
  {
    href: PROTECTED_COMMON_PAGES.dashboard,
    name: 'Dashboard',
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
    href: PROTECTED_HOST_PAGES.settings,
    name: 'Settings',
    icon: 'settings',
  },
];

export const dropdownNavigation: Record<UserActiveModeType, UserDropdownLink[]> = {
  [USER_ACTIVE_MODE.GUEST]: DROPDOWN_NAVIGATION_GUEST,
  [USER_ACTIVE_MODE.HOST]: DROPDOWN_NAVIGATION_HOST,
};
