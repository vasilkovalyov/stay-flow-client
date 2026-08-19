'use client';

import { ComponentProps, ReactNode, useState } from 'react';

import { EyeIcon, EyeOffIcon, LockIcon } from 'lucide-react';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui';

export interface FormPasswordProps<T extends FieldValues> extends Omit<
  ComponentProps<typeof InputGroupInput>,
  'name' | 'type' | 'defaultValue'
> {
  name: Path<T>;
  label?: string;
  description?: ReactNode;
}

export function FormPassword<T extends FieldValues>({
  name,
  label,
  description,
  id,
  ...props
}: FormPasswordProps<T>) {
  const [visible, setVisible] = useState(false);
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
            <InputGroupAddon>
              <LockIcon />
            </InputGroupAddon>
            <InputGroupInput
              {...field}
              {...props}
              id={fieldId}
              type={visible ? 'text' : 'password'}
              value={field.value ?? ''}
              aria-invalid={!!fieldState.error}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="button"
                size="icon-xs"
                aria-label={visible ? 'Hide password' : 'Show password'}
                onClick={() => setVisible((prev) => !prev)}
              >
                {visible ? <EyeOffIcon /> : <EyeIcon />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {description && !fieldState.error && <FieldDescription>{description}</FieldDescription>}
          <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
        </Field>
      )}
    />
  );
}
