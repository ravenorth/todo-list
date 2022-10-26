import React from 'react';
import { TaskCreator } from '../components/TaskCreator';
import { Task } from '../components/Task';
import styles from "./App.module.css"
import { useAtom } from '@reatom/react';
import { tasksAtom } from '../reatom/taskAtoms';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const list = useAtom(tasksAtom);
  
  return (
    <div className={styles.app}>
      <p className={styles.headline}>TODO LIST</p>
      <TaskCreator />
      <div className={styles.taskList}>
        {list.map((task, index) => <Task task={task} index={index} key={uuidv4()} />)}
      </div>
    </div>
  );
}

export default App;
