import type { CheckboxStatus } from "../types/checkboxStatus.types";

export function toggleCheckUncheckWithIndeterminate(
  value: CheckboxStatus,
  setValue: (value: CheckboxStatus) => void
) {
  if (value === "indeterminate") setValue("unchecked");
  else if (value === "unchecked") setValue("checked");
  else if (value === "checked") setValue("indeterminate");
  else setValue("unchecked");
}