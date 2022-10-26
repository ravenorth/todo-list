import React from 'react'
import styles from "./App.module.css"
import { useAtom } from '@reatom/react'
import { Task } from '../components/Task'
import { TaskCreator } from '../components/TaskCreator';
import { tasksAtom } from '../reatom/atoms';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const list = useAtom(tasksAtom);

  return (
    <div className={styles.App}>
      <p className={styles.Headline}>TODO LIST</p>
      <TaskCreator />
      <div className={styles.TaskList}>
        {list.map((task, index) => <Task task={task} index={index} key={uuidv4()} />)}
      </div>
    </div>
  );
}

export default App;
