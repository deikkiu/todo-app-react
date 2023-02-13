import classnames from 'classnames';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import styles from './Todo.module.css';
import todo from './todo.svg';

export default function Todo(props) {
  const { id, text, isCompleted, deleteTodo, completedTodo } = props;

  return (
    <>
      <div className={styles.todo}>
        <div className={styles.content}>
          <img className={styles.img} src={todo} alt="Todo" />
          <div
            className={
              !isCompleted
                ? styles.text
                : classnames(styles.text, styles.completed)
            }
          >
            {text}
          </div>
        </div>
        <div className={styles.btns}>
          <FaRegTrashAlt
            className={styles.delete}
            onClick={() => deleteTodo(id)}
          />
          <FcApproval
            onClick={() => completedTodo(id)}
            className={styles.check}
          />
        </div>
      </div>
    </>
  );
}
