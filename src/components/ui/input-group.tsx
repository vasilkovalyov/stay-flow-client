'use client';

import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function InputGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        `
          group/input-group relative flex
          w-full min-w-0 items-center

          rounded-xl border
          bg-input
          transition-[color,box-shadow,background-color]
          outline-none

          in-data-[slot=combobox-content]:focus-within:border-inherit
          in-data-[slot=combobox-content]:focus-within:ring-0

          has-[textarea]:radius-lg

          has-[[data-slot=input-group-control]:focus-visible]:border-ring
          has-[[data-slot=input-group-control]:focus-visible]:ring-3
          has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30

          has-[[data-slot][aria-invalid=true]]:border-destructive
          has-[[data-slot][aria-invalid=true]]:ring-3
          has-[[data-slot][aria-invalid=true]]:ring-destructive/20
      
          has-[>textarea]:h-auto

          has-[>[data-align=inline-end]]:[&>input]:pr-[6px]
          has-[>[data-align=inline-start]]:[&>input]:pl-[6px]
        `,
        className,
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  `
    flex h-auto cursor-text items-center
    justify-center gap-[7px] py-[7px]

    font-semibold text-muted-foreground select-none

    group-data-[disabled=true]/input-group:opacity-50

    **:data-[slot=kbd]:rounded-xl
    **:data-[slot=kbd]:bg-muted-foreground/10
    **:data-[slot=kbd]:px-[6px]

    [&>svg:not([class*='size-'])]:size-[16px]
  `,
  {
    variants: {
      align: {
        'inline-start': 'order-first pl-[10px] has-[>button]:-ml-[4px] has-[>kbd]:-ml-[4px]',
        'inline-end': 'order-last pr-[10px] has-[>button]:-mr-[4px] has-[>kbd]:-mr-[4px]',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
);

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return;
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva('flex items-center gap-[7px] rounded-xl shadow-none', {
  variants: {
    size: {
      xs: "h-[21px] gap-[4px] rounded-xl px-[6px] [&>svg:not([class*='size-'])]:size-[12.25px]",
      sm: '',
      'icon-xs': 'size-[21px] rounded-xl p-0 has-[>svg]:p-0',
      'icon-sm': 'size-[28px] p-0 has-[>svg]:p-0',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<ComponentProps<typeof Button>, 'size' | 'type'> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: 'button' | 'submit' | 'reset';
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        "flex items-center gap-[7px] text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[14px]",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput({ className, ...props }: ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0',
        className,
      )}
      {...props}
    />
  );
}

function InputGroupTextarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-[8px] shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0',
        className,
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
