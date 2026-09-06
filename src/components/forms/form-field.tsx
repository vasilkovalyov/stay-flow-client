'use client';

import { FieldValues } from 'react-hook-form';

import { FieldsIconType } from '../shared';
import { FormCheckbox, FormCheckboxProps } from './form-checkbox';
import { FormCombobox, FormComboboxProps } from './form-combobox';
import { FormDate, FormDateProps } from './form-date';
import { FormInput, FormInputProps } from './form-input';
import { FormPassword, FormPasswordProps } from './form-password';
import { FormPhone, FormPhoneProps } from './form-phone';
import { FormSelect, FormSelectProps } from './form-select';
import { FormSwitcher, FormSwitcherProps } from './form-switcher';
import { FormTextarea, FormTextareaProps } from './form-textarea';

type FormFieldBaseProps = {
  wrapperClassname?: string;
  icon?: FieldsIconType;
};

export type FormFieldProps<T extends FieldValues> =
  | ({ type: 'input' } & FormInputProps<T> & FormFieldBaseProps)
  | ({ type: 'password' } & FormPasswordProps<T> & FormFieldBaseProps)
  | ({ type: 'checkbox' } & FormCheckboxProps<T> & FormFieldBaseProps)
  | ({ type: 'select' } & FormSelectProps<T> & FormFieldBaseProps)
  | ({ type: 'combobox' } & FormComboboxProps<T> & FormFieldBaseProps)
  | ({ type: 'phone' } & FormPhoneProps<T> & FormFieldBaseProps)
  | ({ type: 'switcher' } & FormSwitcherProps<T> & FormFieldBaseProps)
  | ({ type: 'textarea' } & FormTextareaProps<T> & FormFieldBaseProps)
  | ({ type: 'date' } & FormDateProps<T> & FormFieldBaseProps);

export type FormFieldType = FormFieldProps<FieldValues>['type'];

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
    case 'combobox':
      return <FormCombobox {...omitType(props)} />;
    case 'phone':
      return <FormPhone {...omitType(props)} />;
    case 'switcher':
      return <FormSwitcher {...omitType(props)} />;
    case 'textarea':
      return <FormTextarea {...omitType(props)} />;
    case 'date':
      return <FormDate {...omitType(props)} />;
    default:
      return null;
  }
}
