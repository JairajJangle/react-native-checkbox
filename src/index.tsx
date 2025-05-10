import { useEffect, useMemo, useRef } from 'react';

import {
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  type TouchableOpacityProps,
} from 'react-native';
import type { CheckboxProps } from './types';
import {
  animationDuration,
  defaultCheckedColor,
  defaultDisabledColor,
  defaultUncheckedColor,
} from './constants';
import { getStyles } from './styles';

// Import either Expo or React Native Vector Icons based on availability
function loadMaterialIcon() {
  try {
    return require('@expo/vector-icons/MaterialCommunityIcons').default;
  } catch (e) {
    try {
      return require(
        'react-native-vector-icons/MaterialCommunityIcons'
      ).default;
    } catch (error) {
      console.error(
        'No icon library found. Please install either @expo/vector-icons or react-native-vector-icons'
      );
      return null;
    }
  }
}

const MaterialCommunityIcon = loadMaterialIcon();

function Checkbox(props: CheckboxProps) {
  const {
    status,
    disabled = false,
    onPress,
    testID,
    uncheckedColor = defaultUncheckedColor,
    color = defaultCheckedColor,
    style,
    size = 24,
    ...rest
  } = props;

  // Get styles based on size
  const styles = useMemo(() => getStyles(size), [size]);

  const { current: scaleAnim } = useRef<Animated.Value>(new Animated.Value(1));
  const isFirstRendering = useRef<boolean>(true);

  useEffect(() => {
    // Do not run animation on very first rendering
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      return;
    }

    const checked = status === 'checked';

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.85,
        duration: checked ? animationDuration : 0,
        useNativeDriver: false,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: checked ? animationDuration : animationDuration * 1.75,
        useNativeDriver: false,
      }),
    ]).start();
  }, [status, scaleAnim]);

  const checked = useMemo(() => status === 'checked', [status]);
  const indeterminate = useMemo(() => status === 'indeterminate', [status]);

  const selectionControlColor = useMemo(() => {
    if (disabled) {
      return defaultDisabledColor;
    }
    if (checked) {
      return color;
    }
    return uncheckedColor;
  }, [disabled, checked, color, uncheckedColor]);

  const borderWidth = scaleAnim.interpolate({
    inputRange: [0.8, 1],
    outputRange: [7 * (size / 24), 0], // Scale border animation with size
  });

  const icon = useMemo(() => (
    indeterminate
      ? 'minus-box'
      : checked
        ? 'checkbox-marked'
        : 'checkbox-blank-outline'
  ), [indeterminate, checked]);

  // Accessibility props based on platform
  const accessibilityProps: TouchableOpacityProps = useMemo(() => (
    Platform.OS === 'web'
      ? {
        role: 'checkbox',
        accessibilityState: { checked, disabled },
        // focusable: !disabled,
      }
      : {
        accessibilityRole: 'checkbox',
        accessibilityState: { disabled, checked },
        accessibilityLiveRegion: 'polite',
      }
  ), [checked, disabled]);

  return (
    <TouchableOpacity
      {...rest}
      {...accessibilityProps}
      onPress={disabled ? undefined : onPress}
      style={[styles.container, style]}
      testID={testID}
      activeOpacity={0.7}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        {MaterialCommunityIcon ? (
          <MaterialCommunityIcon
            allowFontScaling={false}
            name={icon}
            size={size}
            color={selectionControlColor}
          />
        ) : (
          <View
            style={[
              styles.fallbackIcon,
              { borderColor: selectionControlColor },
            ]}
          />
        )}
        <View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
          <Animated.View
            style={[
              styles.fill,
              { borderColor: selectionControlColor },
              { borderWidth },
            ]}
          />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

export {
  Checkbox,
  type CheckboxProps,
};
