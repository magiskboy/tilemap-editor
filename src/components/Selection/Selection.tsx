import type React from "react";
import styles from "./Selection.module.scss";

function Selection<T extends { key: string }>(props: Props<T>) {
  const { labelField = "label", options, onChange } = props;

  const onSelectChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.value.toString();
    const selected = options.find((opt) => opt.key === key)!;
    onChange?.(selected);
  };

  return (
    <select onChange={onSelectChanged} className={styles.root}>
      {options.map((item) => (
        <option value={item.key} key={item.key} className={styles.option}>
          {(item as any)[labelField]}
        </option>
      ))}
    </select>
  );
}

interface Props<T> {
  options: T[];
  onChange?: (selected: T) => void;
  labelField?: string;
}

export default Selection;
