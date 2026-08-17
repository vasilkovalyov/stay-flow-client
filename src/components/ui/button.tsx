import { cn } from '@/lib/utils';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  `
    group/button inline-flex shrink-0 items-center
    justify-center gap-[8px]

    border border-transparent
    bg-clip-padding
    font-semibold whitespace-nowrap
    transition-all
    outline-none select-none

    active:not-aria-[haspopup]:translate-y-px

    focus-visible:border-ring
    focus-visible:ring-3
    focus-visible:ring-ring/30

    disabled:pointer-events-none
    disabled:opacity-50

    aria-invalid:border-destructive
    aria-invalid:ring-3
    aria-invalid:ring-destructive/20

    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline:
          'border-border bg-light hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:border-destructive/90 focus-visible:ring-destructive/90',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: "rounded-xl text-xs py-[6px] px-[12px] [&_svg:not([class*='size-'])]:size-[14px]",
        default:
          "rounded-xl text-base py-[10px] px-[16px] [&_svg:not([class*='size-'])]:size-[16px]",
        lg: "rounded-lg  text-sm py-[14px] px-[24px] [&_svg:not([class*='size-'])]:size-[18px]",
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
