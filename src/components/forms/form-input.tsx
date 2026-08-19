'use client';

import { ComponentProps, ReactNode } from 'react';

import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui';

export interface FormInputProps<T extends FieldValues> extends Omit<
  ComponentProps<typeof InputGroupInput>,
  'name' | 'defaultValue'
> {
  name: Path<T>;
  label?: string;
  description?: string;
  icon?: ReactNode;
}

export function FormInput<T extends FieldValues>({
  name,
  label,
  description,
  icon,
  id,
  ...props
}: FormInputProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={!!fieldState.error}>
          {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
          <InputGroup>
            {icon && <InputGroupAddon>{icon}</InputGroupAddon>}
            <InputGroupInput
              {...field}
              {...props}
              id={fieldId}
              value={field.value ?? ''}
              aria-invalid={!!fieldState.error}
            />
          </InputGroup>
          {description && !fieldState.error && <FieldDescription>{description}</FieldDescription>}
          <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
        </Field>
      )}
    />
  );
}
