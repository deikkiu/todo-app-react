import styles from './Header.module.css';
import logo from './react.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="React" />
      <div className={styles.title}>Todo</div>
    </header>
  );
}
