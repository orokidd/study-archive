// Button.jsx
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.btn}>Click Me</button>;
}

// If you want to apply multiple classes: 
// export default function Button() {
//   return <button className={`${styles.btn} ${styles.primary}`}>Click Me</button>
// }
