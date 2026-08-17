import { cn } from '@/lib/utils';
import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { CheckIcon } from 'lucide-react';

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        `
          peer relative flex size-[18px] shrink-0
          items-center justify-center
          rounded-[5px] border
          bg-background
          text-primary-foreground
          transition-colors
          outline-none

          after:absolute
          after:-inset-x-[10px]
          after:-inset-y-[7px]

          data-unchecked:border-border
          data-unchecked:bg-background

          data-checked:border-primary
          data-checked:bg-primary
          data-checked:text-primary-foreground

          hover:data-unchecked:border-foreground/20

          focus-visible:border-ring
          focus-visible:ring-3
          focus-visible:ring-ring/30

          disabled:cursor-not-allowed
          disabled:opacity-50

          aria-invalid:border-destructive
          aria-invalid:ring-3
          aria-invalid:ring-destructive/20

          group-has-disabled/field:opacity-50
        `,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center"
      >
        <CheckIcon className="size-[13px]" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
