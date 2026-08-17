import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { Input as InputPrimitive } from '@base-ui/react/input';

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        `
          h-[42px] w-full min-w-0
          rounded-xl border
          bg-input
          text-input-foreground
          px-[16px] py-[10px]
          transition-[color,box-shadow,background-color]
          outline-none
          placeholder:text-muted-foreground

          file:inline-flex
          file:h-[24.5px]
          file:border-0
          file:bg-transparent
          file:font-semibold
          file:text-foreground

          focus-visible:border-ring
          focus-visible:ring-3
          focus-visible:ring-ring/30

          disabled:pointer-events-none
          disabled:cursor-not-allowed
          disabled:opacity-50

          aria-invalid:border-destructive
          aria-invalid:ring-3
          aria-invalid:ring-destructive/20
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
