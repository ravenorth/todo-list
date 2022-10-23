import React from 'react';
import styles from "./Styles.module.css"
import { useAction } from '@reatom/react'
import { delTask, changeTask } from './atoms';

function TaskText(props) {
  if (props.task.isChecked)
    return (
      <s className={styles.TaskString}>{props.task.str}</s>
    )
  else
    return (
      <label className={styles.TaskString}>{props.task.str}</label>
    );
}

export function Task(props) {

  const handleDel = useAction(
    e => {return delTask(props.index)},
    [props.index]
  );

  const handleChange = useAction(
    e => {return changeTask(props)},
    [props]
  );

  return (
    <div className={styles.Task}>
      <input type="checkbox" onChange={handleChange} defaultChecked={props.task.isChecked} className={styles.Checkbox} />
      <TaskText task={props.task} />
      <button onClick={handleDel} className={styles.Button}>del</button>
    </div>
  );
}