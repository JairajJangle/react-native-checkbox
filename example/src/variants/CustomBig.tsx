import { useState } from 'react';
import { Checkbox } from '@futurejj/react-native-checkbox';
import {
  toggleCheckUncheckWithIndeterminate,
} from '../helpers/toggleCheckUncheckWithIndeterminate';
import type { CheckboxStatus } from '../types/checkboxStatus.types';
import { StyleSheet } from 'react-native';

export default function CustomBig() {
  const [value, setValue] = useState<CheckboxStatus>('checked');

  function onValueChange() {
    toggleCheckUncheckWithIndeterminate(value, setValue);
  }

  return (
    <Checkbox
      status={value}
      size={100}
      style={styles.checkbox}
      onPress={onValueChange} />
  );
}

const styles = StyleSheet.create({
  checkbox: {
    marginTop: 50,
  },
});
