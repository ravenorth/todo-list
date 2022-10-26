import { declareAction } from '@reatom/core'
import { TaskType } from '../model/TaskType';

export const delTask = declareAction<number>();
export const addTask = declareAction<TaskType>();
export const changeTask = declareAction<number>();
