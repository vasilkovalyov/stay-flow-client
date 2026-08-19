'use client';

import { ReactNode } from 'react';

import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { Field, FieldError, FieldLabel, Switch } from '@/components/ui';

export interface FormSwitcherProps<T extends FieldValues> {
  name: Path<T>;
  label: ReactNode;
  description?: string;
  id?: string;
}

export function FormSwitcher<T extends FieldValues>({
  name,
  label,
  description,
  id,
}: FormSwitcherProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState }) => (
        <div className="flex flex-col gap-[6px]">
          <Field
            orientation="horizontal"
            className="justify-between"
            data-invalid={!!fieldState.error}
          >
            <FieldLabel htmlFor={fieldId} className="font-normal">
              {label}
            </FieldLabel>
            <Switch
              id={fieldId}
              inputRef={ref}
              checked={!!value}
              onCheckedChange={onChange}
              onBlur={onBlur}
              aria-invalid={!!fieldState.error}
            />
          </Field>
          {description && <FieldDescriptionText>{description}</FieldDescriptionText>}
          <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
        </div>
      )}
    />
  );
}

function FieldDescriptionText({ children }: { children: ReactNode }) {
  return <p className="text-xs text-muted-foreground">{children}</p>;
}
