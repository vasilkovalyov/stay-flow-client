'use client';

import { Separator } from '@/components/ui';

import { AccordionTabsSection } from './sections/accordion-tabs';
import { AlertsAvatarsSection } from './sections/alerts-avatars';
import { ButtonsBadgesSection } from './sections/buttons-badges';
import { CalendarSection } from './sections/calendar-section';
import { CardTableSection } from './sections/card-table';
import { ChatSection } from './sections/chat';
import { ControlsSection } from './sections/controls';
import { FeedbackSection } from './sections/feedback';
import { FormSection } from './sections/form';
import { MiscSection } from './sections/misc';
import { NavigationSection } from './sections/navigation';
import { OverlaysSection } from './sections/overlays';
import { ToastSection } from './sections/toast-section';

const SECTIONS = [
  { id: 'buttons-badges', title: 'Buttons & Badges', component: ButtonsBadgesSection },
  { id: 'alerts-avatars', title: 'Alerts & Avatars', component: AlertsAvatarsSection },
  { id: 'accordion-tabs', title: 'Accordion & Tabs', component: AccordionTabsSection },
  { id: 'card-table', title: 'Card & Table', component: CardTableSection },
  {
    id: 'overlays',
    title: 'Dialog, Alert Dialog, Popover & Dropdown Menu',
    component: OverlaysSection,
  },
  {
    id: 'navigation',
    title: 'Navigation Menu, Breadcrumb & Pagination',
    component: NavigationSection,
  },
  { id: 'controls', title: 'Checkbox, Switch & Toggle', component: ControlsSection },
  { id: 'form', title: 'Form Fields', component: FormSection },
  { id: 'feedback', title: 'Progress, Slider, Spinner & Skeleton', component: FeedbackSection },
  { id: 'calendar', title: 'Calendar', component: CalendarSection },
  { id: 'toast', title: 'Toast', component: ToastSection },
  { id: 'chat', title: 'Message & Attachment', component: ChatSection },
  { id: 'misc', title: 'Aspect Ratio & Separator', component: MiscSection },
] as const;

export default function UI() {
  return (
    <div className="mx-auto max-w-[896px] space-y-[56px] px-[21px] py-[42px]">
      <header className="space-y-[7px]">
        <h1 className="font-heading text-[26.25px] font-semibold">UI Kit</h1>
        <p className="text-muted-foreground">
          A showcase of every primitive in <code>src/components/ui</code>, demonstrating variants,
          sizes, and states.
        </p>
      </header>

      <h1 className="text-[60px]">The quick brown fox 60px</h1>
      <h1 className="text-[48px]">The quick brown fox 48px</h1>

      <h1>The quick brown fox h1</h1>
      <h2>The quick brown fox h2</h2>
      <h3>The quick brown fox h3</h3>
      <h4>The quick brown fox h4</h4>

      <p>The quick brown fox - body</p>
      <p className="text-xs">The quick brown fox - caption</p>

      {SECTIONS.map(({ id, title, component: Component }, index) => (
        <section key={id} id={id} className="space-y-[21px] bg-card p-[10px]">
          <h2 className="text-[17.5px] font-semibold">{title}</h2>
          <Component />
          {index < SECTIONS.length - 1 && <Separator className="mt-[35px]" />}
        </section>
      ))}
    </div>
  );
}
