import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string;
  checkboxComponent: React.ReactNode;
}

export default function DisplayRow(props: Props) {
  const { checkboxComponent, text } = props;

  return (
    <View
      style={styles.view}>
      <Text>{text}</Text>
      {checkboxComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
