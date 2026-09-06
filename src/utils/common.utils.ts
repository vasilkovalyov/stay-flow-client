import { SelectOption } from '@/types';

export function mapToSelectOptions<T>(
  items: T[],
  valueKey: keyof T,
  labelKey: keyof T,
): SelectOption[] {
  return items.map((item) => ({
    value: String(item[valueKey]),
    label: String(item[labelKey]),
  }));
}
