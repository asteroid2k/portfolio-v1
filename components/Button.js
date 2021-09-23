import styles from "../styles/Button.module.css";

export default function Button(props) {
  return (
    <div>
      <button className={styles.button}>{props.text}</button>
    </div>
  );
}
