import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';

type NativeSelectProps = Omit<ComponentProps<'select'>, 'size'> & {
  size?: 'sm' | 'default';
};

function NativeSelect({ className, size = 'default', ...props }: NativeSelectProps) {
  return (
    <div
      className={cn(
        'group/native-select relative w-fit has-[select:disabled]:opacity-50',
        className,
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="
          h-[42px] w-full min-w-0
          appearance-none
          rounded-xl border
          bg-input
          py-[4px] pr-[28px] pl-[10px]
          transition-[color,box-shadow,background-color]
          outline-none select-none

          data-[size=sm]:h-[28px]

          selection:bg-primary
          selection:text-primary-foreground
          placeholder:text-muted-foreground

          focus-visible:border-ring
          focus-visible:ring-3
          focus-visible:ring-ring/30

          disabled:pointer-events-none
          disabled:cursor-not-allowed

          aria-invalid:border-destructive
          aria-invalid:ring-3
          aria-invalid:ring-destructive/20
        "
        {...props}
      />
      <ChevronDownIcon
        className="pointer-events-none absolute top-1/2 right-[8px] size-[14px] -translate-y-1/2 text-muted-foreground select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
}

function NativeSelectOption({ className, ...props }: ComponentProps<'option'>) {
  return (
    <option
      data-slot="native-select-option"
      className={cn('bg-[Canvas] text-[CanvasText]', className)}
      {...props}
    />
  );
}

function NativeSelectOptGroup({ className, ...props }: ComponentProps<'optgroup'>) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn('bg-[Canvas] text-[CanvasText]', className)}
      {...props}
    />
  );
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
