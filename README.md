# @futurejj/react-native-checkbox

A papery checkbox for react native

[![npm version](https://img.shields.io/npm/v/%40futurejj%2Freact-native-checkbox)](https://badge.fury.io/js/%40futurejj%2Freact-native-checkbox) ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![Workflow Status](https://github.com/JairajJangle/react-native-checkbox/actions/workflows/ci.yml/badge.svg)](https://github.com/JairajJangle/react-native-checkbox/actions/workflows/ci.yml) ![Android](https://img.shields.io/badge/-Android-555555?logo=android&logoColor=3DDC84) ![iOS](https://img.shields.io/badge/-iOS-555555?logo=apple&logoColor=white) ![Web](https://img.shields.io/badge/-Web-555555?logo=google-chrome&logoColor=0096FF) [![GitHub issues](https://img.shields.io/github/issues/JairajJangle/react-native-checkbox)](https://github.com/JairajJangle/react-native-checkbox/issues?q=is%3Aopen+is%3Aissue) ![TS](https://img.shields.io/badge/TypeScript-strict_💪-blue) [![Expo Snack](https://img.shields.io/badge/Expo%20Snack-555555?style=flat&logo=expo&logoColor=white)](https://snack.expo.dev/@futurejj/react-native-checkbox-example) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40futurejj%2Freact-native-checkbox)

A beautiful, customizable, and animated checkbox component for React Native applications. This component works across iOS, Android, and Web platforms with smooth animations and accessibility support.

<div align="center">   <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnl6dG1mOXJ5bGd6bTVrMWV5YnAzMmkzYTRvbWFjZ2RkMjh4eHl3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pegf3CERuvAllv0dxv/giphy.gif" alt="React Native Animated Checkbox Demo" width="300"/> </div>

## Features

- ✨ Beautiful animations on state changes
- 🎨 Fully customizable colors and styling
- 📱 Cross-platform (iOS, Android, Web)
- 🔄 Three states: checked, unchecked, and indeterminate
- ♿ Accessibility support built-in
- 📏 Customizable size for various design needs
- 🔌 Works with Expo and standard React Native
- 🔍 TypeScript support with full type definitions

## Installation

```bash
yarn add @futurejj/react-native-checkbox
# or
npm install @futurejj/react-native-checkbox
```

### Icon Dependencies

This component uses Material Community Icons. You'll need to install either:

- `@expo/vector-icons` (if using Expo - built-in)
- `react-native-vector-icons` (if using React Native CLI - follow the installation instructions for `react-native-vector-icons`)

## Usage

### Basic Example

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from '@futurejj/react-native-checkbox';

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <View style={{ padding: 20 }}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={toggleCheckbox}
      />
    </View>
  );
}
```

### Customization

```jsx
<Checkbox
  status="checked" // 'checked', 'unchecked', or 'indeterminate'
  disabled={false} // disable the checkbox
  onPress={() => {}} // handle press events
  color="#6200ee" // color when checked
  uncheckedColor="#757575" // color when unchecked
  size={32} // customize size (default: 24)
  style={{ marginRight: 8 }} // additional styles for the container
/>
```

## API Reference

### Props

| Prop             | Type                                          | Default     | Description                          |
| ---------------- | --------------------------------------------- | ----------- | ------------------------------------ |
| `status`         | `'checked' OR 'unchecked' OR 'indeterminate'` | Required    | Current status of the checkbox       |
| `disabled`       | `boolean`                                     | `false`     | Whether the checkbox is disabled     |
| `onPress`        | `(e: GestureResponderEvent) => void`          | Required    | Callback when checkbox is pressed    |
| `color`          | `string`                                      | `'#2196F3'` | Color of the checkbox when checked   |
| `uncheckedColor` | `string`                                      | `'#757575'` | Color of the checkbox when unchecked |
| `size`           | `number`                                      | `24`        | Size of the checkbox icon            |
| `testID`         | `string`                                      | -           | Test ID for testing frameworks       |
| `style`          | `StyleProp<ViewStyle>`                        | -           | Additional styles for container      |

## Animation

The checkbox includes smooth animations:

- Scale animation when transitioning between states
- Custom border animation for a more engaging interaction

## Accessibility

This component is built with accessibility in mind:

- Proper role assignment (`checkbox`)
- Correct states reported to screen readers
- Live region updates for dynamic changes

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

## 🙏 Support the project

<p align="center" valign="center">
  <a href="https://liberapay.com/FutureJJ/donate">
    <img src="https://liberapay.com/assets/widgets/donate.svg" alt="LiberPay_Donation_Button" height="50" > 
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href=".github/assets/Jairaj_Jangle_Google_Pay_UPI_QR_Code.jpg">
    <img src=".github/assets/upi.png" alt="Paypal_Donation_Button" height="50" >
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.paypal.com/paypalme/jairajjangle001/usd">
    <img src=".github/assets/paypal_donate.png" alt="Paypal_Donation_Button" height="50" >
  </a>
</p>



## ❤️ Thanks to 

- Module built using [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
- Heavily Inspired by [React Native Paper's Checkbox.Android](https://callstack.github.io/react-native-paper/docs/components/Checkbox/CheckboxAndroid) component
- Readme is edited using [Typora](https://typora.io/)
