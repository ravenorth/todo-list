import React from 'react';
import styles from "./Styles.module.css"
import { TaskType } from '../model/TaskType';
import { useAction } from '@reatom/react';
import { changeTask, delTask } from '../reatom/taskActions';

function getStringStyle(isChecked: boolean): string {
  const defaultStyle = styles.taskString;
  if (isChecked) {
    return defaultStyle + " " + styles.checkedTaskString;
  } else {
    return defaultStyle;
  }
}

interface TaskProps {
  task: TaskType,
  index: number,
}

export function Task(props: TaskProps) {
  const handleDel = useAction(
    e => {return delTask(props.index)},
    [props.index]
  );

  const handleChange = useAction(
    e => {return changeTask(props.index)},
    [props]
  );

  return (
    <div className={styles.task}>
      <input type="checkbox" onChange={handleChange} defaultChecked={props.task.isChecked} className={styles.checkbox} />
      <label className={getStringStyle(props.task.isChecked)}>{props.task.str}</label>
      <button onClick={handleDel} className={styles.button}>del</button>
    </div>
  );
}