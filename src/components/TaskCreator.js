import React, { useRef, useState } from 'react'
import styles from "./Styles.module.css"
import { useAction } from '@reatom/react'
import { addTask } from '../reatom/actions';

export function TaskCreator() {
  const [inputStr, setInputStr] = useState("");
  const inputRef = useRef();
  
  const handleAdd = useAction(
    e => {if (inputStr.length !== 0) {
      inputRef.current.value = "";
      setInputStr("");
      return addTask({str: inputStr, isChecked: false});
    }},
    [inputStr]
  );

  return (
    <div className={styles.TaskCreator}>
      <input type="text" onChange={e => setInputStr(e.target.value)} ref={inputRef} className={styles.InputText} />
      <button onClick={handleAdd} className={styles.Button}>add</button>
    </div>
  );
}