import { View, Text, StyleSheet, StatusBar } from 'react-native';
import DisplayRow from "./components/DisplayRow";
import Normal from "./variants/Normal";
import Custom from "./variants/Custom";
import Cycle from "./variants/Cycle";
import Indeterminate from "./variants/Indeterminate";
import CheckedDisabled from "./variants/CheckedDisabled";
import UncheckedDisabled from "./variants/UncheckedDisabled";
import IndeterminateDisabled from "./variants/IndeterminateDisabled";
import CustomBig from "./variants/CustomBig";
import packageJson from "../../package.json";

export default function App() {
  return (
    <View
      style={styles.parent}>
      <StatusBar barStyle="dark-content" />
      <View
        style={styles.header}>
        <Text style={styles.prefixHeaderText}>
          @futurejj/
        </Text>
        <View
          style={styles.headerParent}>
          <Text style={styles.headerText}>
            React Native Checkbox
          </Text>
          <View
            style={styles.versionTextBox}>
            <Text style={styles.versionText}>
              {packageJson.version}
            </Text>
          </View>
        </View>
      </View>
      <DisplayRow text={"Normal"} checkboxComponent={<Normal />} />
      <DisplayRow text={"Custom"} checkboxComponent={<Custom />} />
      <DisplayRow text={"Indeterminate"} checkboxComponent={<Indeterminate />} />
      <DisplayRow text={"Cycle"} checkboxComponent={<Cycle />} />
      <DisplayRow text={"Checked Disabled"} checkboxComponent={<CheckedDisabled />} />
      <DisplayRow text={"Unchecked Disabled"} checkboxComponent={<UncheckedDisabled />} />
      <DisplayRow text={"IndeterminateDisabled"} checkboxComponent={<IndeterminateDisabled />} />
      <CustomBig />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    backgroundColor: "lightblue",
    paddingTop: 90,
    marginBottom: 15,
    paddingHorizontal: 18,
    paddingBottom: 20,
    width: "100%",
  },
  prefixHeaderText: {
    fontSize: 16,
  },
  headerParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  versionTextBox: {
    backgroundColor: "black",
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    borderRadius: 25
  },
  versionText: {
    fontSize: 12,
    color: "white",
  },
});
