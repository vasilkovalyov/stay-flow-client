'use client';

import { ChangeEvent, ComponentProps, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';

import { usePhoneCodes } from '@/hooks';

import { PhoneCode } from '@/types';

export interface FormPhoneProps<T extends FieldValues> extends Omit<
  ComponentProps<typeof InputGroupInput>,
  'name' | 'defaultValue' | 'onChange' | 'value'
> {
  /** Form key the phone number (without the calling code) is stored under. */
  name: Path<T>;
  /** Form key the selected calling code (e.g. "380") is stored under. */
  codeName: Path<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  /** Calling code to preselect once codes are loaded and the code field is still empty (e.g. "380"). */
  defaultCode?: string;
}

export function FormPhone<T extends FieldValues>({
  name,
  codeName,
  label,
  description,
  placeholder,
  defaultCode,
  id,
  disabled,
  ...props
}: FormPhoneProps<T>) {
  const { control } = useFormContext<T>();
  const fieldId = id ?? name;
  const { data: phoneCodesResponse } = usePhoneCodes();
  const phoneCodes = useMemo(
    () =>
      phoneCodesResponse?.success
        ? phoneCodesResponse.data.map((item) => {
            return {
              ...item,
              phonecode: `+${item.phonecode}`,
            };
          })
        : [],
    [phoneCodesResponse],
  );
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const filteredCodes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return phoneCodes;
    }

    return phoneCodes.filter((code) => code.phonecode.toLowerCase().includes(query));
  }, [phoneCodes, search]);

  return (
    <Controller
      control={control}
      name={codeName}
      render={({ field: codeField, fieldState: codeFieldState }) => (
        <Controller
          control={control}
          name={name}
          render={({ field: numberField, fieldState: numberFieldState }) => {
            const fallbackCode =
              phoneCodes.find((code) => code.phonecode === defaultCode) ?? phoneCodes[0];
            const selectedCode =
              phoneCodes.find((code) => code.phonecode === codeField.value) ?? fallbackCode;

            const handleCodeSelect = (code: PhoneCode) => {
              codeField.onChange(code.phonecode);
              setOpen(false);
              setSearch('');
            };

            const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
              numberField.onChange(event.target.value.replace(/\D/g, ''));

              if (!codeField.value && fallbackCode) {
                codeField.onChange(fallbackCode.phonecode);
              }
            };

            const hasError = !!codeFieldState.error || !!numberFieldState.error;

            return (
              <Field data-invalid={hasError}>
                {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
                <InputGroup>
                  <InputGroupAddon className="pr-0">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger
                        render={
                          <button
                            ref={codeField.ref}
                            type="button"
                            disabled={disabled}
                            onBlur={codeField.onBlur}
                          />
                        }
                        className={cn(`
                          flex items-center gap-[6px] rounded-lg
                          px-[6px] outline-none

                          hover:bg-muted-foreground/10

                          disabled:pointer-events-none
                          disabled:opacity-50
                        `)}
                      >
                        <span className="leading-none">{selectedCode?.emoji ?? '🌐'}</span>
                        <span className="flex items-center text-input-foreground font-normal">
                          {selectedCode?.phonecode ?? '--'}
                        </span>
                        <ChevronDownIcon className="size-[14px] text-muted-foreground" />
                      </PopoverTrigger>
                      <PopoverContent
                        align="start"
                        className="max-h-[280px] w-[220px] gap-[8px] overflow-hidden p-[8px]"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Input
                          autoFocus
                          placeholder="Search code"
                          value={search}
                          onChange={(event) => setSearch(event.target.value)}
                          className="h-[32px]"
                        />
                        <div className="flex max-h-[200px] flex-col gap-[2px] overflow-y-auto">
                          {filteredCodes.length === 0 && (
                            <p className="px-[8px] py-[6px] text-xs text-muted-foreground">
                              No results
                            </p>
                          )}
                          {filteredCodes.map((code) => (
                            <button
                              key={code.id}
                              type="button"
                              onClick={() => handleCodeSelect(code)}
                              className={cn(
                                `
                                  flex items-center gap-[8px]
                                  rounded-lg px-[8px] py-[6px]
                                  text-left

                                  hover:bg-muted-foreground/10
                                `,
                                selectedCode?.id === code.id && 'bg-muted-foreground/10',
                              )}
                            >
                              <span className="leading-none">{code.emoji}</span>
                              <span>{code.phonecode}</span>
                            </button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </InputGroupAddon>
                  <InputGroupInput
                    {...props}
                    id={fieldId}
                    name={numberField.name}
                    ref={numberField.ref}
                    type="tel"
                    inputMode="tel"
                    placeholder={placeholder}
                    value={numberField.value ?? ''}
                    disabled={disabled}
                    onChange={handleNumberChange}
                    onBlur={numberField.onBlur}
                    aria-invalid={!!numberFieldState.error}
                  />
                </InputGroup>
                {description && !hasError && <FieldDescription>{description}</FieldDescription>}
                <FieldError errors={[codeFieldState.error, numberFieldState.error]} />
              </Field>
            );
          }}
        />
      )}
    />
  );
}
