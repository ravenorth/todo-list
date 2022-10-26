import React from 'react'
import styles from "./Styles.module.css"
import { useAction, useAtom } from '@reatom/react'
import { addTask } from '../reatom/taskActions'
import { declareAction, declareAtom } from '@reatom/core'

const changeInputStr = declareAction<string>();
const inputStrAtom = declareAtom("", on => [
  on(changeInputStr, (state: string, value: string) => value),
  on(addTask, () => "")
])

export function TaskCreator() {
  const inputStr = useAtom(inputStrAtom);

  const handleChangeInput = useAction(
    e => changeInputStr(e.target.value)
  );
  
  const handleAddTask = useAction(e => {
    if (inputStr.length !== 0) {
      return addTask({str: inputStr, isChecked: false});
    }},
    [inputStr]
  );

  return (
    <div className={styles.taskCreator}>
      <input type="text" onChange={handleChangeInput} value={inputStr} className={styles.inputText} />
      <button onClick={handleAddTask} className={styles.button}>add</button>
    </div>
  );
}