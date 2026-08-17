import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { type VariantProps, cva } from 'class-variance-authority';

import { Button } from '@/components/ui/button';

const attachmentVariants = cva(
  `
    group/attachment relative flex w-fit max-w-full
    min-w-0 shrink-0 flex-wrap

    rounded-xl border bg-card
    text-card-foreground
    transition-colors

    data-[state=error]:border-destructive/30
    data-[state=idle]:border-dashed

    focus-within:ring-1
    focus-within:ring-ring/30

    has-[>a,>button]:hover:bg-muted/50
  `,
  {
    variants: {
      size: {
        default:
          'gap-[7px] has-data-[slot=attachment-content]:px-[8px] has-data-[slot=attachment-content]:py-[7px] has-data-[slot=attachment-media]:p-[7px]',
        sm: 'gap-[8px] text-xs has-data-[slot=attachment-content]:px-[7px] has-data-[slot=attachment-content]:py-[6px] has-data-[slot=attachment-media]:p-[6px]',
        xs: 'gap-[6px] radius-lg text-xs has-data-[slot=attachment-content]:px-[6px] has-data-[slot=attachment-content]:py-[4px] has-data-[slot=attachment-media]:p-[4px]',
      },
      orientation: {
        horizontal: 'min-w-[140px] items-center',
        vertical: 'w-[84px] flex-col has-data-[slot=attachment-content]:w-[105px]',
      },
    },
  },
);

function Attachment({
  className,
  state = 'done',
  size = 'default',
  orientation = 'horizontal',
  ...props
}: ComponentProps<'div'> &
  VariantProps<typeof attachmentVariants> & {
    state?: 'idle' | 'uploading' | 'processing' | 'error' | 'done';
  }) {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={cn(attachmentVariants({ size, orientation }), className)}
      {...props}
    />
  );
}

const attachmentMediaVariants = cva(
  `
    relative flex aspect-square w-[35px]
    shrink-0 items-center justify-center
    overflow-hidden

    radius-lg bg-muted
    text-foreground

    group-data-[orientation=vertical]/attachment:w-full
    group-data-[size=sm]/attachment:w-[28px]
    group-data-[size=xs]/attachment:w-[24.5px]
    group-data-[size=xs]/attachment:rounded-xl

    group-data-[state=error]/attachment:bg-destructive/10
    group-data-[state=error]/attachment:text-destructive

    group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6!

    [&_svg]:pointer-events-none
    [&_svg:not([class*='size-'])]:size-[14px]
    group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-[21px]
    group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-[12.25px]
  `,
  {
    variants: {
      variant: {
        icon: '',
        image:
          'opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'icon',
    },
  },
);

function AttachmentMedia({
  className,
  variant = 'icon',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof attachmentMediaVariants>) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariants({ variant }), className)}
      {...props}
    />
  );
}

function AttachmentContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        'max-w-full min-w-0 flex-1 leading-tight group-data-[orientation=vertical]/attachment:px-[4px]',
        className,
      )}
      {...props}
    />
  );
}

function AttachmentTitle({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        'block max-w-full min-w-0 truncate font-semibold group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer',
        className,
      )}
      {...props}
    />
  );
}

function AttachmentDescription({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        'mt-[1.75px] block min-w-0 truncate text-xs text-muted-foreground group-data-[state=error]/attachment:text-destructive/80',
        'max-w-full',
        className,
      )}
      {...props}
    />
  );
}

function AttachmentActions({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        `
          relative z-20 flex shrink-0 items-center

          group-data-[orientation=vertical]/attachment:absolute
          group-data-[orientation=vertical]/attachment:top-[10px]
          group-data-[orientation=vertical]/attachment:right-[10px]
          group-data-[orientation=vertical]/attachment:gap-[4px]
        `,
        className,
      )}
      {...props}
    />
  );
}

function AttachmentAction({
  className,
  variant,
  size = 'sm',
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="attachment-action"
      variant={variant ?? 'ghost'}
      size={size}
      className={cn(className)}
      {...props}
    />
  );
}

function AttachmentTrigger({
  className,
  render,
  type,
  ...props
}: useRender.ComponentProps<'button'>) {
  return useRender({
    defaultTagName: 'button',
    props: mergeProps<'button'>(
      {
        type: render ? type : (type ?? 'button'),
        className: cn('absolute inset-0 z-10 outline-none', className),
      },
      props,
    ),
    render,
    state: {
      slot: 'attachment-trigger',
    },
  });
}

function AttachmentGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        `
          flex min-w-0 gap-[10px] py-[4px]

          snap-x snap-mandatory scroll-px-[4px]
          scroll-fade-x scrollbar-none
          overflow-x-auto overscroll-x-contain

          *:data-[slot=attachment]:flex-none
          *:data-[slot=attachment]:snap-start
        `,
        className,
      )}
      {...props}
    />
  );
}

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
};
