import { useMemo } from 'react';

import { getCities, getStates } from '@/api/states.api';
import { useMe } from '@/features/auth/hooks';
import { ApiError } from '@/lib/api-error';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UseFormReturn, useForm, useWatch } from 'react-hook-form';

import { toast } from '@/components/ui';

import { useCountries } from '@/hooks';

import { TANSTACK_QUERY_KEY } from '@/constants';

import { SelectOption } from '@/types';

import { mapToSelectOptions } from '@/utils';

import { updateProfile } from './profile-form.api';
import { FormFieldName, ProfileFormValues } from './profile-form.type';
import { updateUserFormResponseAdapter, updateUserRequestAdapter } from './profile-form.utils';
import { schemaValidation } from './profile-form.validation';

interface UseProfileFormProps {
  methods: UseFormReturn<ProfileFormValues>;
  getFieldDisabled: (fieldName: FormFieldName) => boolean;
  getSelectOptions: (fieldName: FormFieldName) => SelectOption[];
  onChange: (field: FormFieldName, value: string) => void;
  onSubmit: (props: ProfileFormValues) => void;
}

export function useProfileForm(): UseProfileFormProps {
  const { data: countriesData } = useCountries();
  const { data: user } = useMe();

  const userValues = useMemo<ProfileFormValues | undefined>(() => {
    if (!user?.success) {
      return undefined;
    }

    return updateUserFormResponseAdapter(user.data);
  }, [user?.data]);

  const methods = useForm<ProfileFormValues>({
    resolver: zodResolver(schemaValidation),
    values: userValues,
    resetOptions: { keepDirtyValues: true },
  });
  const { control, setValue } = methods;

  const country = useWatch({
    control,
    name: 'country',
  });

  const state = useWatch({
    control,
    name: 'state',
  });

  const { data: statesData } = useQuery({
    queryKey: [TANSTACK_QUERY_KEY.states, country],
    queryFn: () => getStates(country!),
    enabled: !!country,
  });

  const { data: citiesData } = useQuery({
    queryKey: [TANSTACK_QUERY_KEY.cities, state],
    queryFn: () => getCities(state!),
    enabled: !!state,
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: async () => {
      toast.add({
        type: 'success',
        title: 'Profile updated',
        description: 'Your profile has been successfully updated.',
      });
    },
    onError: (e) => {
      if (e instanceof ApiError) {
        toast.add({
          type: 'error',
          title: 'Update failed',
          description: e.message,
        });
      }
    },
  });

  function onSubmit(values: ProfileFormValues) {
    updateProfileMutation.mutate(updateUserRequestAdapter(values));
  }

  function getSelectOptions(fieldName: FormFieldName): SelectOption[] {
    if (fieldName === 'country' && countriesData?.success) {
      return mapToSelectOptions(countriesData?.data, 'id', 'name') || [];
    }

    if (fieldName === 'state' && statesData?.success) {
      return mapToSelectOptions(statesData?.data, 'id', 'name') || [];
    }

    if (fieldName === 'city' && citiesData?.success) {
      return mapToSelectOptions(citiesData?.data, 'id', 'name') || [];
    }

    return [];
  }

  function onChange(field: FormFieldName, value: string): void {
    switch (field) {
      case 'country':
        setValue('country', value);
        setValue('state', '');
        setValue('city', '');
        break;

      case 'state':
        setValue('state', value);
        setValue('city', '');
        break;

      case 'city':
        setValue('city', value);
        break;
    }
  }

  function getFieldDisabled(fieldName: FormFieldName): boolean {
    switch (fieldName) {
      case 'state':
        return !country;

      case 'city':
        return !state;

      default:
        return false;
    }
  }

  return {
    methods,
    getFieldDisabled,
    getSelectOptions,
    onChange,
    onSubmit,
  };
}
