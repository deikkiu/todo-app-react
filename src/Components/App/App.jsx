import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form/Form';
import List from '../List/List';
import Header from '../Header/Header';
import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (todoId) => {
    setTodos(todos.filter(({ id }) => id !== todoId));
  };

  const resetCompletedTodoHandler = () => {
    setTodos(todos.filter(({ isCompleted }) => !isCompleted));
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const completedTodoHandler = (todoId) => {
    setTodos(
      todos.map((item) => {
        const { id, isCompleted } = item;

        return id === todoId ? { ...item, isCompleted: !isCompleted } : item;
      })
    );
  };

  const completedTodosCount = todos.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header />
        <Form
          addTodo={addTodoHandler}
          resetTodo={resetTodoHandler}
          resetCompletedTodo={resetCompletedTodoHandler}
          completedTodosCount={completedTodosCount}
        />
        <List
          todos={todos}
          deleteTodo={deleteTodoHandler}
          completedTodo={completedTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
