import { Text, View } from "react-native";

interface Props {
  text: string;
  checkboxComponent: React.ReactNode;
}

export default function DisplayRow(props: Props) {
  const { checkboxComponent, text } = props;

  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginVertical: 5,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Text>{text}</Text>
      {checkboxComponent}
    </View>
  );
}