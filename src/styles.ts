import { StyleSheet } from 'react-native';

export function getStyles(size = 24) {
  // Calculate relative dimensions based on size
  const containerSize = size * 1.5; // 36/24 = 1.5
  const containerPadding = size * 0.25; // 6/24 = 0.25
  const fillSize = size * 0.583; // 14/24 = 0.583
  const fallbackIconSize = size * 0.833; // 20/24 = 0.833
  const borderRadius = size * 0.75; // 18/24 = 0.75

  return StyleSheet.create({
    container: {
      borderRadius: borderRadius,
      width: containerSize,
      height: containerSize,
      padding: containerPadding,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fillContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      height: fillSize,
      width: fillSize,
    },
    fallbackIcon: {
      width: fallbackIconSize,
      height: fallbackIconSize,
      borderWidth: 2,
      borderRadius: 2,
    },
  });
}
