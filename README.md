# @futurejj/react-native-checkbox

A papery checkbox for react native

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/badge/npm-v1.0.0-green.svg) ![platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-lightgrey.svg)

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
yarn add react-native-animated-checkbox
# or
npm install react-native-animated-checkbox
```

### Icon Dependencies

This component uses Material Community Icons. You'll need to install either:

- `@expo/vector-icons` (if using Expo - built-in)
- `react-native-vector-icons` (if using React Native CLI)

```bash
# For React Native CLI
npm install react-native-vector-icons
# Then follow the installation instructions for react-native-vector-icons
```

## Usage

### Basic Example

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-animated-checkbox';

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

| Prop             | Type                                        | Default     | Description                          |
| ---------------- | ------------------------------------------- | ----------- | ------------------------------------ |
| `status`         | `'checked' | 'unchecked' | 'indeterminate'` | Required    | Current status of the checkbox       |
| `disabled`       | `boolean`                                   | `false`     | Whether the checkbox is disabled     |
| `onPress`        | `(e: GestureResponderEvent) => void`        | Required    | Callback when checkbox is pressed    |
| `color`          | `string`                                    | `'#2196F3'` | Color of the checkbox when checked   |
| `uncheckedColor` | `string`                                    | `'#757575'` | Color of the checkbox when unchecked |
| `size`           | `number`                                    | `24`        | Size of the checkbox icon            |
| `testID`         | `string`                                    | -           | Test ID for testing frameworks       |
| `style`          | `StyleProp<ViewStyle>`                      | -           | Additional styles for container      |

## Animation

The checkbox includes smooth animations:

- Scale animation when transitioning between states
- Custom border animation for a more engaging interaction

## Accessibility

This component is built with accessibility in mind:

- Proper role assignment (`checkbox`)
- Correct states reported to screen readers
- Live region updates for dynamic changes

## Examples

### All states

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-animated-checkbox';

export default function AllStates() {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox status="unchecked" onPress={() => {}} />
        <Text style={{ marginLeft: 8 }}>Unchecked</Text>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox status="checked" onPress={() => {}} />
        <Text style={{ marginLeft: 8 }}>Checked</Text>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox status="indeterminate" onPress={() => {}} />
        <Text style={{ marginLeft: 8 }}>Indeterminate</Text>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox status="checked" disabled onPress={() => {}} />
        <Text style={{ marginLeft: 8 }}>Disabled</Text>
      </View>
    </View>
  );
}
```

### Different sizes

```jsx
import React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-animated-checkbox';

export default function DifferentSizes() {
  return (
    <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
      <Checkbox status="checked" size={16} onPress={() => {}} />
      <Checkbox status="checked" size={24} onPress={() => {}} />
      <Checkbox status="checked" size={32} onPress={() => {}} />
      <Checkbox status="checked" size={48} onPress={() => {}} />
    </View>
  );
}
```

### Custom colors

```jsx
import React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-animated-checkbox';

export default function CustomColors() {
  return (
    <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
      <Checkbox status="checked" color="#F44336" onPress={() => {}} />
      <Checkbox status="checked" color="#4CAF50" onPress={() => {}} />
      <Checkbox status="checked" color="#2196F3" onPress={() => {}} />
      <Checkbox status="checked" color="#FF9800" onPress={() => {}} />
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

Made with ❤️ for the React Native community.

Heavily Inspired by React Native Paper's Checkbox.Android component.
