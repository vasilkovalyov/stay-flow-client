'use client';

import { ComponentProps, useState } from 'react';

import { cn } from '@/lib/utils';
import { format, isValid, parseISO } from 'date-fns';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Calendar,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';

import { FIELDS_ICONS, FieldsIconType } from '../shared';

const DATE_VALUE_FORMAT = 'yyyy-MM-dd';
const DATE_DISPLAY_FORMAT = 'dd/MM/yyyy';

export interface FormDateProps<T extends FieldValues> {
  name: Path<T>;
  id?: string;
  label?: string;
  description?: string;
  placeholder?: string;
  icon?: FieldsIconType;
  disabled?: boolean;
  className?: string;
  captionLayout?: ComponentProps<typeof Calendar>['captionLayout'];
}

export function FormDate<T extends FieldValues>({
  name,
  id,
  label,
  description,
  placeholder = 'Pick a date',
  icon = 'calendar',
  disabled,
  className,
  captionLayout = 'dropdown',
}: FormDateProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const parsedDate = field.value ? parseISO(field.value) : undefined;
        const selectedDate = parsedDate && isValid(parsedDate) ? parsedDate : undefined;

        return (
          <Field data-invalid={!!fieldState.error}>
            {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
            <Popover open={open} onOpenChange={setOpen}>
              <InputGroup>
                {icon && <InputGroupAddon>{FIELDS_ICONS[icon]}</InputGroupAddon>}
                <PopoverTrigger
                  render={
                    <button
                      id={fieldId}
                      type="button"
                      data-slot="input-group-control"
                      disabled={disabled}
                      onBlur={field.onBlur}
                    />
                  }
                  className={cn(
                    `
                      h-[42px] flex-1 rounded-none border-0
                      bg-transparent px-[16px] py-[10px]
                      text-left text-input-foreground shadow-none
                      outline-none

                      disabled:pointer-events-none
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    `,
                    !selectedDate && 'text-muted-foreground',
                    className,
                  )}
                >
                  {selectedDate ? format(selectedDate, DATE_DISPLAY_FORMAT) : placeholder}
                </PopoverTrigger>
              </InputGroup>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar
                  mode="single"
                  captionLayout={captionLayout}
                  selected={selectedDate}
                  onSelect={(date) => {
                    field.onChange(date ? format(date, DATE_VALUE_FORMAT) : '');
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
            {description && !fieldState.error && <FieldDescription>{description}</FieldDescription>}
            <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
          </Field>
        );
      }}
    />
  );
}
