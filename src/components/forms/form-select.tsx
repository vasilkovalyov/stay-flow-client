'use client';

import { ComponentProps } from 'react';

import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui';

interface FormSelectOption {
  label: string;
  value: string;
}

export interface FormSelectProps<T extends FieldValues> extends Omit<
  ComponentProps<typeof NativeSelect>,
  'name' | 'defaultValue' | 'children'
> {
  name: Path<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  options: FormSelectOption[];
}

export function FormSelect<T extends FieldValues>({
  name,
  label,
  description,
  placeholder,
  options,
  id,
  className,
  ...props
}: FormSelectProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={!!fieldState.error}>
          {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
          <NativeSelect
            {...props}
            {...field}
            id={fieldId}
            value={field.value ?? ''}
            aria-invalid={!!fieldState.error}
            className={className ?? 'w-full'}
          >
            {placeholder && (
              <NativeSelectOption value="" disabled>
                {placeholder}
              </NativeSelectOption>
            )}
            {options.map((option) => (
              <NativeSelectOption key={option.value} value={option.value}>
                {option.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          {description && !fieldState.error && <FieldDescription>{description}</FieldDescription>}
          <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
        </Field>
      )}
    />
  );
}

export type { FormSelectOption };
