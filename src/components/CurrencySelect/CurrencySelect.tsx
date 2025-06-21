import styles from "./CurrencySelect.module.css";

interface Props {
  value: string;
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

const CurrencySelect = ({ value, label, options, onChange }: Props) => {
  return (
    <label className={styles.label}>
      {label}
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default CurrencySelect;
