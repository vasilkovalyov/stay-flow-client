import { ReactNode, useMemo } from 'react';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

function FieldSet({ className, ...props }: ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'flex flex-col gap-[21px] has-[>[data-slot=checkbox-group]]:gap-[10px] has-[>[data-slot=radio-group]]:gap-[10px]',
        className,
      )}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}: ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        'mb-[10px] font-semibold data-[variant=label]:data-[variant=legend]:text-base',
        className,
      )}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'group/field-group @container/field-group flex w-full flex-col gap-[24.5px] data-[slot=checkbox-group]:gap-[10px] *:data-[slot=field-group]:gap-[14px]',
        className,
      )}
      {...props}
    />
  );
}

const fieldVariants = cva(
  `
    group/field flex w-full gap-[6px]
    data-[invalid=true]:text-destructive
  `,
  {
    variants: {
      orientation: {
        vertical: 'flex-col *:w-full [&>.sr-only]:w-auto',
        horizontal: `
          flex-row items-center

          *:data-[slot=field-label]:flex-auto

          has-[>[data-slot=field-content]]:items-start
          has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px
        `,
        responsive: `
          flex-col *:w-full
          [&>.sr-only]:w-auto

          @md/field-group:flex-row
          @md/field-group:items-center
          @md/field-group:*:w-auto
          @md/field-group:*:data-[slot=field-label]:flex-auto
          @md/field-group:has-[>[data-slot=field-content]]:items-start
          @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px
        `,
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
);

function Field({
  className,
  orientation = 'vertical',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-content"
      className={cn('group/field-content flex flex-1 flex-col gap-[4px] leading-snug', className)}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        `
          group/field-label peer/field-label flex w-fit
          gap-[8px] leading-snug
          font-semibold

          group-data-[disabled=true]/field:opacity-50
          has-data-checked:bg-input/30

          has-[>[data-slot=field]]:w-full
          has-[>[data-slot=field]]:flex-col
          has-[>[data-slot=field]]:radius-lg
          has-[>[data-slot=field]]:border

          *:data-[slot=field]:p-[14px]
        `,
        className,
      )}
      {...props}
    />
  );
}

function FieldTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        'flex w-fit items-center gap-[8px] font-semibold group-data-[disabled=true]/field:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        `
          text-xs text-destructive text-muted-foreground

          [[data-variant=legend]+&]:-mt-[6px]
          group-has-data-horizontal/field:text-balance
          last:mt-0
          nth-last-2:-mt-[4px]

          [&>a]:underline
          [&>a]:underline-offset-4
          [&>a:hover]:text-primary
        `,
        className,
      )}
      {...props}
    />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: ComponentProps<'div'> & {
  children?: ReactNode;
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        'relative -my-[7px] h-[17.5px] group-data-[variant=outline]/field-group:-mb-[7px]',
        className,
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="relative mx-auto block w-fit bg-background px-[7px] text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors?.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="ml-[14px] flex list-disc text-xs flex-col gap-[4px]">
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn('text-xs text-destructive', className)}
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};
