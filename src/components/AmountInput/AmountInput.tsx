import styles from "./AmountInput.module.css";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const AmountInput = ({ value, onChange }: Props) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      placeholder="amount"
      className={styles.input}
    />
  );
};

export default AmountInput;
