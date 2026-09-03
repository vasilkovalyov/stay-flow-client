import { ReactNode } from 'react';

import {
  Bell,
  Building2,
  CalendarDays,
  CreditCard,
  DollarSign,
  Heart,
  LayoutDashboard,
  MessageCircle,
  Plus,
  Settings,
  ShieldCheck,
  Star,
  Trash2,
  UserRound,
  UsersRound,
} from 'lucide-react';

import { NavigationIconType } from './navigation-icons.type';

export const NAVIGATION_ICONS: Record<NavigationIconType, ReactNode> = {
  dashboard: <LayoutDashboard />,
  messages: <MessageCircle />,
  notifications: <Bell />,
  security: <ShieldCheck />,
  deleteAccount: <Trash2 />,
  myTrips: <CalendarDays />,
  savedHomes: <Heart />,
  profile: <UserRound />,
  payments: <CreditCard />,
  properties: <Building2 />,
  addProperty: <Plus />,
  bookings: <CalendarDays />,
  revenue: <DollarSign />,
  guests: <UsersRound />,
  reviews: <Star />,
  payouts: <CreditCard />,
  settings: <Settings />,
} as const;
