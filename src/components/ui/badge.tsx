import { cn } from '@/lib/utils';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { type VariantProps, cva } from 'class-variance-authority';

const badgeVariants = cva(
  `
    group/badge inline-flex w-fit shrink-0
    items-center justify-center gap-[4px]
    overflow-hidden

    py-[4px] px-[10px]

    text-[12px] font-semibold whitespace-nowrap

    rounded-full border border-transparent
    transition-all

    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/50

    aria-invalid:border-destructive
    aria-invalid:ring-destructive/20

    [&>svg]:pointer-events-none
  `,
  {
    variants: {
      variant: {
        default: 'bg-secondary text-foreground',
        success: 'bg-success-light text-success',
        warning: 'bg-warning-light text-warning',
        error: 'bg-destructive/10 text-destructive focus-visible:ring-destructive/20',
        info: 'bg-info-light text-info',
        outline: 'border-border text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant = 'default',
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  });
}

export { Badge, badgeVariants };
