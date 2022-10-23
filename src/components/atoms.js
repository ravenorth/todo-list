import { declareAction, declareAtom } from '@reatom/core'

function removeItem(arr, i) { 
  if (i >= 0) {
    arr.splice(i, 1);
  }
  return [...arr];
}

function changeItem(arr, i, task) {
  arr.splice(i, 1); 
  const removed = {
    ...task,
    isChecked: !task.isChecked
  };
  if (removed.isChecked) {
    return [...arr, removed];
  } else {
    return [removed, ...arr];
  }
}

export const delTask = declareAction();
export const addTask = declareAction();
export const changeTask = declareAction();

// const startList = [
//   {str: "11", isChecked: false},
//   {str: "22", isChecked: false},
//   {str: "33", isChecked: false}
// ];

export const tasksAtom = declareAtom([], on => [
  on(delTask, (state, index) => removeItem(state, index)),
  on(addTask, (state, task) => [task, ...state]),
  on(changeTask, (state, props) => changeItem(state, props.index, props.task)),
]);