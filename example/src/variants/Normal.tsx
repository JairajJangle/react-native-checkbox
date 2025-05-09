import { useState } from "react";
import { Checkbox } from "@futurejj/react-native-checkbox";
import { toggleCheckUncheck } from "../helpers/toggleCheckUncheck";
import type { CheckboxStatus } from "../types/checkboxStatus.types";

export default function Normal() {
  const [value, setValue] = useState<CheckboxStatus>("checked");

  function onValueChange() {
    toggleCheckUncheck(value, setValue);
  }

  return (
    <Checkbox
      status={value}
      onPress={onValueChange} />
  );
}