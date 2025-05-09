import type { CheckboxStatus } from "../types/checkboxStatus.types";

export function toggleCheckUncheck(
  value: CheckboxStatus,
  setValue: (value: CheckboxStatus) => void
) {
  if (value === "unchecked") setValue("checked");
  else if (value === "checked") setValue("unchecked");
  else setValue("unchecked");
}