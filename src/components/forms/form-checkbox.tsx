'use client';

import { ComponentProps, ReactNode } from 'react';

import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { Checkbox, Field, FieldError, FieldLabel } from '@/components/ui';

export interface FormCheckboxProps<T extends FieldValues> extends Omit<
  ComponentProps<typeof Checkbox>,
  'name' | 'checked' | 'onCheckedChange' | 'onBlur'
> {
  name: Path<T>;
  label: ReactNode;
}

export function FormCheckbox<T extends FieldValues>({
  name,
  label,
  id,
  ...props
}: FormCheckboxProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState }) => (
        <div className="flex flex-col gap-[6px]">
          <Field orientation="horizontal" data-invalid={!!fieldState.error}>
            <Checkbox
              {...props}
              id={fieldId}
              inputRef={ref}
              checked={!!value}
              onCheckedChange={onChange}
              onBlur={onBlur}
              aria-invalid={!!fieldState.error}
            />
            <FieldLabel htmlFor={fieldId} className="font-normal">
              {label}
            </FieldLabel>
          </Field>
          <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
        </div>
      )}
    />
  );
}
