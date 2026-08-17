import { Mail, MessageCircle, Phone } from 'lucide-react';

import { LightOverlay } from '@/components/shared';

const CONTACT_LIST = [
  {
    id: '1',
    title: 'Email',
    text: 'support@stayflow.com',
    icon: <Mail size={18} />,
  },
  {
    id: '2',
    title: 'Phone',
    text: '+1 (800) 782-9237',
    icon: <Phone size={18} />,
  },
  {
    id: '3',
    title: 'Live Chat',
    text: 'Available 24/7',
    icon: <MessageCircle size={18} />,
  },
] as const;

export function Contacts() {
  return (
    <div className="grid grid-cols-3 gap-[16px]">
      {CONTACT_LIST.map(({ id, icon, title, text }) => (
        <LightOverlay key={id} className="p-[16px] text-center">
          <div className="size-[40px] bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-[8px]">
            {icon}
          </div>
          <p className="font-bold text-sm">{title}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{text}</p>
        </LightOverlay>
      ))}
    </div>
  );
}
