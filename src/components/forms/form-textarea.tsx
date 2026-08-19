'use client';

import { ComponentProps } from 'react';

import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { Field, FieldDescription, FieldError, FieldLabel, Textarea } from '@/components/ui';

export interface FormTextareaProps<T extends FieldValues> extends Omit<
  ComponentProps<typeof Textarea>,
  'name' | 'defaultValue'
> {
  name: Path<T>;
  label?: string;
  description?: string;
}

export function FormTextarea<T extends FieldValues>({
  name,
  label,
  description,
  id,
  ...props
}: FormTextareaProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={!!fieldState.error}>
          {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
          <Textarea
            {...field}
            {...props}
            id={fieldId}
            value={field.value ?? ''}
            aria-invalid={!!fieldState.error}
          />
          {description && !fieldState.error && <FieldDescription>{description}</FieldDescription>}
          <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
        </Field>
      )}
    />
  );
}
