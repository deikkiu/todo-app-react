import styles from './Button.module.css';

export default function Button(props) {
  const { todoAction, classStyle, children, type } = props;

  return (
    <>
      <button className={styles[classStyle]} onClick={todoAction} type={type}>
        {children}
      </button>
    </>
  );
}
