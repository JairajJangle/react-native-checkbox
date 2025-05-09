import { useState } from "react";
import { Checkbox } from "@futurejj/react-native-checkbox";
import { toggleIndeterminateUncheck } from "../helpers/toggleIndeterminateUncheck";
import type { CheckboxStatus } from "../types/checkboxStatus.types";

export default function Indeterminate() {
  const [value, setValue] = useState<CheckboxStatus>("indeterminate");

  function onValueChange() {
    toggleIndeterminateUncheck(value, setValue);
  }

  return (
    <Checkbox
      status={value}
      onPress={onValueChange} />
  );
}