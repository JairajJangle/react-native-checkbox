import type { GestureResponderEvent } from 'react-native';

export type CheckboxProps = {
  /**
   * Status of checkbox.
   */
  status: 'checked' | 'unchecked' | 'indeterminate';
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * Custom color for unchecked checkbox.
   */
  uncheckedColor?: string;
  /**
   * Custom color for checkbox.
   */
  color?: string;
  /**
   * testID to be used on tests.
   */
  testID?: string;
  /**
   * Style for the container
   */
  style?: any;
  /**
   * Size of the checkbox.
   * @default 24
   */
  size?: number;
};
