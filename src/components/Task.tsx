import React from 'react';
import styles from "./Styles.module.css"
import { TaskType } from '../model/TaskType';
import { useAction } from '@reatom/react';
import { changeTask, delTask } from '../reatom/taskActions';

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

  let labelStyle: string = styles.taskString;
  if (props.task.isChecked) {
    labelStyle = labelStyle + " " + styles.checkedTaskString;
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" onChange={handleChange} defaultChecked={props.task.isChecked} className={styles.checkbox} />
      <label className={labelStyle}>{props.task.str}</label>
      <button onClick={handleDel} className={styles.button}>del</button>
    </div>
  );
}