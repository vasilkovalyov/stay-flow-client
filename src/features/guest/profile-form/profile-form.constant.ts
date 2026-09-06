import { FormFieldProps } from '@/components/forms';

import { ProfileFormValues } from './profile-form.type';

const fieldHalfFullWidthCn = 'sm:w-[calc(50%_-_6px)]';

export const fields = [
  {
    type: 'input',
    name: 'firstName',
    label: 'First name',
    placeholder: 'First name',
    autoComplete: 'given-name',
    wrapperClassname: fieldHalfFullWidthCn,
  },
  {
    type: 'input',
    name: 'lastName',
    label: 'Last name',
    placeholder: 'Last name',
    autoComplete: 'family-name',
    wrapperClassname: fieldHalfFullWidthCn,
  },
  {
    type: 'input',
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    disabled: true,
    icon: 'mail',
  },
  {
    type: 'phone',
    name: 'phone',
    codeName: 'phoneCode',
    label: 'Phone',
    placeholder: 'Your phone',
    wrapperClassname: fieldHalfFullWidthCn,
  },
  {
    type: 'date',
    name: 'birthDate',
    label: 'Date of birth',
    placeholder: 'Pick a date',
    wrapperClassname: fieldHalfFullWidthCn,
    icon: 'calendar',
  },
  {
    type: 'textarea',
    name: 'bio',
    label: 'Bio',
    placeholder: 'Tell us a bit about yourself',
  },
  {
    type: 'combobox',
    name: 'country',
    label: 'Country',
    placeholder: 'Country',
    options: [],
    searchable: true,
  },
  {
    type: 'combobox',
    name: 'state',
    label: 'State',
    placeholder: 'State',
    options: [],
    disabled: true,
    searchable: true,
  },
  {
    type: 'combobox',
    name: 'city',
    label: 'City',
    placeholder: 'City',
    options: [],
    disabled: true,
    searchable: true,
  },
] satisfies FormFieldProps<ProfileFormValues>[];
