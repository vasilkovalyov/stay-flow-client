import { cn } from '@/lib/utils';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { LightOverlay } from '../shared';

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn('flex w-full flex-col overflow-hidden gap-[12px]', className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <LightOverlay>
      <AccordionPrimitive.Item data-slot="accordion-item" className={cn(className)} {...props} />
    </LightOverlay>
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          `
            group/accordion-trigger relative flex flex-1
            items-center justify-between gap-[20px]

            border border-transparent p-[20px]
            text-[16px] text-left font-semibold
            transition-all
            outline-none cursor-pointer

            aria-disabled:pointer-events-none
            aria-disabled:opacity-50

            **:data-[slot=accordion-trigger-icon]:ml-auto
            **:data-[slot=accordion-trigger-icon]:size-[20px]
            **:data-[slot=accordion-trigger-icon]:text-muted-foreground
          `,
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden px-[20px] data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          `
            h-(--accordion-panel-height) pt-0 pb-[20px]

            data-ending-style:h-0
            data-starting-style:h-0

            [&_a]:underline
            [&_a]:underline-offset-3
            [&_a]:hover:text-foreground
            [&_p:not(:last-child)]:mb-[14px]
          `,
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
