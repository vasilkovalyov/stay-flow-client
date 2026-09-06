import { User } from '@/types';

import { ProfileFormValues, UserProfileDto } from './profile-form.type';

export function updateUserRequestAdapter(values: ProfileFormValues): UserProfileDto {
  return {
    firstName: values.firstName,
    lastName: values.lastName,
    phoneCode: values.phoneCode,
    phone: values.phone,
    birthDate: values.birthDate ? new Date(values.birthDate).toISOString() : undefined,
    bio: values.bio,
    countryId: values.country ? parseInt(values.country) : undefined,
    stateId: values.state ? parseInt(values.state) : undefined,
    cityId: values.city ? parseInt(values.city) : undefined,
  };
}

export function updateUserFormResponseAdapter(user: User): ProfileFormValues {
  const {
    firstName,
    lastName,
    email,
    birthDate,
    bio,
    phone,
    phoneCode,
    countryId,
    stateId,
    cityId,
  } = user;

  return {
    firstName,
    lastName,
    email,
    phoneCode: phoneCode ?? '',
    phone: phone ?? '',
    birthDate: birthDate ?? '',
    bio: bio ?? '',
    country: countryId?.toString() ?? '',
    state: stateId?.toString() ?? '',
    city: cityId?.toString() ?? '',
  };
}
