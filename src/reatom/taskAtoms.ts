import { declareAtom } from '@reatom/core'
import { TaskType } from '../model/TaskType';
import { delTask, addTask, changeTask } from './taskActions'

function changeItem(arr: Array<TaskType>, i: number): Array<TaskType> {
  let removed: TaskType = arr.splice(i, 1)[0]; 
  removed.isChecked = !removed.isChecked;
  if (removed.isChecked) {
    return [...arr, removed];
  } else {
    return [removed, ...arr];
  }
}

const defaultList: Array<TaskType> = [
  // {str: "111", isChecked: false},
  // {str: "veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery long task", isChecked: false},
  // {str: "some task", isChecked: false}
];

export const tasksAtom = declareAtom(defaultList, on => [
  on(delTask, (state: Array<TaskType>, index: number) => state.filter((task, i) => i != index)),
  on(addTask, (state: Array<TaskType>, task: TaskType) => [task, ...state]),
  on(changeTask, (state: Array<TaskType>, index: number) => changeItem(state, index)),
]);