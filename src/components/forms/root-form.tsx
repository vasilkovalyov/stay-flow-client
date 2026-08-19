'use client';

import { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface RootFormProps<T extends FieldValues> extends Omit<
  ComponentProps<'form'>,
  'onSubmit' | 'children'
> {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
}

export function RootForm<T extends FieldValues>({
  methods,
  onSubmit,
  className,
  children,
  ...props
}: RootFormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}
