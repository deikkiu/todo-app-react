import { useState } from 'react';
import Button from '../Button/Button';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RxUpdate } from 'react-icons/rx';
import styles from './Form.module.css';

export default function Form(props) {
  const { addTodo, resetTodo, resetCompletedTodo, completedTodosCount } = props;
  const [inputValue, setInputValue] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (inputValue.trim()) addTodo(inputValue);
    setInputValue('');
  };

  const onResetHandler = (event) => {
    event.preventDefault();
    resetTodo();
  };

  const onResetCompleted = (event) => {
    event.preventDefault();
    resetCompletedTodo();
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        Todo <span>List</span>
      </h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          placeholder="Enter new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="reset" todoAction={onResetCompleted} classStyle="reset">
          <FaRegTrashAlt />
        </Button>
        <Button type="reset" todoAction={onResetHandler} classStyle="reset">
          <RxUpdate />
        </Button>
        <Button type="submit" todoAction={onSubmitHandler} classStyle="submit">
          +
        </Button>
      </form>
      {!!completedTodosCount && (
        <div>You have completed {completedTodosCount} todo</div>
      )}
      <div className={styles.divider}></div>
    </div>
  );
}
