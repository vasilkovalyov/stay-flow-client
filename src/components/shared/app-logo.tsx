import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HomeIcon } from 'lucide-react';

const appLogoVariants = cva(
  `
    rounded-xl
    bg-primary
    flex items-center justify-center
    text-light
    shadow-sm
  `,
  {
    variants: {
      size: {
        sm: 'size-[28px] [&_svg]:size-[14px]',
        lg: 'size-[32px] [&_svg]:size-[16px]',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

const appLogoTextVariants = cva(
  `
    font-extrabold tracking-tight
  `,
  {
    variants: {
      size: {
        sm: 'text-sm',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

export function AppLogo({ size }: VariantProps<typeof appLogoVariants>) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className={cn(appLogoVariants({ size }))}>
        <HomeIcon />
      </div>
      <span className={cn(appLogoTextVariants({ size }))}>StayFlow</span>
    </div>
  );
}
