import type { CheckboxStatus } from '../types/checkboxStatus.types';

export function toggleIndeterminateUncheck(
  value: CheckboxStatus,
  setValue: (value: CheckboxStatus) => void
) {
  if (value === 'unchecked') { setValue('indeterminate'); }
  else if (value === 'indeterminate') { setValue('unchecked'); }
  else { setValue('unchecked'); }
}
