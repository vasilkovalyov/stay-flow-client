'use client';

import { ComponentProps, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';

import { FormSelectOption } from './form-select';

export interface FormComboboxProps<T extends FieldValues> extends Omit<
  ComponentProps<'button'>,
  'name' | 'defaultValue' | 'onChange' | 'value' | 'children' | 'type'
> {
  name: Path<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  options: FormSelectOption[];
  onChange?: (value: string) => void;
  searchable?: boolean;
}

export function FormCombobox<T extends FieldValues>({
  name,
  label,
  description,
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No results',
  options,
  id,
  disabled,
  className,
  onChange,
  searchable = true,
  ...props
}: FormComboboxProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredOptions = useMemo(() => {
    const query = searchable ? search.trim().toLowerCase() : '';

    if (!query) {
      return options;
    }

    return options.filter((option) => option.label.toLowerCase().includes(query));
  }, [options, search, searchable]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      setSearch('');
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const selectedOption = options.find((option) => option.value === field.value);

        const handleSelect = (option: FormSelectOption) => {
          field.onChange(option.value);
          onChange?.(option.value);
          handleOpenChange(false);
        };

        return (
          <Field data-invalid={!!fieldState.error}>
            {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
            <Popover open={open} onOpenChange={handleOpenChange}>
              <PopoverTrigger
                render={
                  <button
                    {...props}
                    id={fieldId}
                    ref={field.ref}
                    type="button"
                    disabled={disabled}
                    onBlur={field.onBlur}
                  />
                }
                aria-invalid={!!fieldState.error}
                className={cn(
                  `
                    flex h-[42px] w-full items-center justify-between
                    gap-[8px] rounded-xl border
                    bg-input px-[16px] py-[10px]
                    text-left text-input-foreground
                    outline-none
                    transition-[color,box-shadow,background-color]

                    focus-visible:border-border-strong

                    disabled:pointer-events-none
                    disabled:cursor-not-allowed
                    disabled:opacity-50

                    aria-invalid:border-destructive
                    aria-invalid:outline-2
                    aria-invalid:outline-offset-2
                    aria-invalid:outline-destructive
                  `,
                  className,
                )}
              >
                <span className={cn('truncate', !selectedOption && 'text-muted-foreground')}>
                  {selectedOption?.label ?? placeholder}
                </span>
                <ChevronDownIcon className="size-[14px] shrink-0 text-muted-foreground" />
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-(--anchor-width) gap-[8px] overflow-hidden p-[8px] max-h-[200px]"
                onClick={(event) => event.stopPropagation()}
              >
                {searchable && (
                  <Input
                    autoFocus
                    placeholder={searchPlaceholder}
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="h-[32px]"
                  />
                )}
                <div className="flex max-h-[240px] flex-col gap-[2px] overflow-y-auto">
                  {filteredOptions.length === 0 && (
                    <p className="px-[8px] py-[6px] text-xs text-muted-foreground">
                      {emptyMessage}
                    </p>
                  )}
                  {filteredOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={cn(
                        `
                          flex items-center justify-between
                          gap-[8px] rounded-lg
                          px-[8px] py-[6px]
                          text-left

                          hover:bg-muted-foreground/10
                        `,
                        option.value === field.value && 'bg-muted-foreground/10',
                      )}
                    >
                      <span className="truncate">{option.label}</span>
                      {option.value === field.value && (
                        <CheckIcon className="size-[14px] shrink-0 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
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
