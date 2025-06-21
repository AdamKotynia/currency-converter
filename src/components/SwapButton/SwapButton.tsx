import styles from "./SwapButton.module.css";

interface Props {
  onClick: () => void;
}

const SwapButton = ({ onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src="src/assets/swap.svg" />
    </button>
  );
};

export default SwapButton;
