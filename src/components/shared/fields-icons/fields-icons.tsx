import { ReactNode } from 'react';

import { CalendarIcon, Clock, Globe, MailIcon, MapPin, Phone } from 'lucide-react';

import { FieldsIconType } from './fields-icons.type';

export const FIELDS_ICONS: Record<FieldsIconType, ReactNode> = {
  calendar: <CalendarIcon />,
  clock: <Clock />,
  globe: <Globe />,
  mail: <MailIcon />,
  mapPin: <MapPin />,
  phone: <Phone />,
};
