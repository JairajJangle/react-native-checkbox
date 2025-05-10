import { useState } from 'react';
import { Checkbox } from '@futurejj/react-native-checkbox';
import {
  toggleCheckUncheckWithIndeterminate,
} from '../helpers/toggleCheckUncheckWithIndeterminate';
import type { CheckboxStatus } from '../types/checkboxStatus.types';

export default function Cycle() {
  const [value, setValue] = useState<CheckboxStatus>('checked');

  function onValueChange() {
    toggleCheckUncheckWithIndeterminate(value, setValue);
  }

  return (
    <Checkbox
      status={value}
      onPress={onValueChange} />
  );
}
