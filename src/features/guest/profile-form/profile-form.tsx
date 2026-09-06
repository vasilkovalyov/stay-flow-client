'use client';

import { ChangeEvent } from 'react';

import { cn } from '@/lib/utils';

import { FormField, RootForm } from '@/components/forms';
import { Button } from '@/components/ui';

import { fields } from './profile-form.constant';
import { useProfileForm } from './use-profile-form';

export function ProfileForm() {
  const { methods, getFieldDisabled, getSelectOptions, onChange, onSubmit } = useProfileForm();

  return (
    <RootForm methods={methods} onSubmit={onSubmit} className="grid gap-[12px]">
      <div className="flex flex-wrap justify-between gap-[12px]">
        {fields.map((props) => {
          if (props.type === 'select') {
            const { wrapperClassname, ...selectProps } = props;

            return (
              <div key={props.name} className={cn('w-full', wrapperClassname)}>
                <FormField
                  {...selectProps}
                  options={getSelectOptions(props.name)}
                  disabled={getFieldDisabled(props.name)}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    onChange(props.name, e.target.value);
                  }}
                />
              </div>
            );
          }

          const { wrapperClassname, ...rest } = props;

          return (
            <div key={props.name} className={cn('w-full', wrapperClassname)}>
              <FormField {...rest} />
            </div>
          );
        })}
      </div>
      <div>
        <Button type="submit">Save changes</Button>
      </div>
    </RootForm>
  );
}
