import styles from './List.module.css';
import Todo from '../Todo/Todo';

export default function List(props) {
  const { todos, deleteTodo, completedTodo } = props;

  return (
    <div className={styles.list}>
      {!todos.length ? (
        <div className={styles.empty}>List is empty</div>
      ) : (
        todos.map((item) => {
          const { text, isCompleted, id } = item;
          return (
            <Todo
              key={id}
              id={id}
              text={text}
              isCompleted={isCompleted}
              deleteTodo={deleteTodo}
              completedTodo={completedTodo}
            />
          );
        })
      )}
    </div>
  );
}
