'use client';

import { FieldValues } from 'react-hook-form';

import { FormCheckbox, FormCheckboxProps } from './form-checkbox';
import { FormInput, FormInputProps } from './form-input';
import { FormPassword, FormPasswordProps } from './form-password';
import { FormSelect, FormSelectProps } from './form-select';
import { FormSwitcher, FormSwitcherProps } from './form-switcher';
import { FormTextarea, FormTextareaProps } from './form-textarea';

export type FormFieldProps<T extends FieldValues> =
  | ({ type: 'input' } & FormInputProps<T>)
  | ({ type: 'password' } & FormPasswordProps<T>)
  | ({ type: 'checkbox' } & FormCheckboxProps<T>)
  | ({ type: 'select' } & FormSelectProps<T>)
  | ({ type: 'switcher' } & FormSwitcherProps<T>)
  | ({ type: 'textarea' } & FormTextareaProps<T>);

function omitType<T extends { type: string }>(props: T): Omit<T, 'type'> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type, ...fieldProps } = props;
  return fieldProps;
}

export function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
  switch (props.type) {
    case 'input':
      return <FormInput {...omitType(props)} />;
    case 'password':
      return <FormPassword {...omitType(props)} />;
    case 'checkbox':
      return <FormCheckbox {...omitType(props)} />;
    case 'select':
      return <FormSelect {...omitType(props)} />;
    case 'switcher':
      return <FormSwitcher {...omitType(props)} />;
    case 'textarea':
      return <FormTextarea {...omitType(props)} />;
    default:
      return null;
  }
}
