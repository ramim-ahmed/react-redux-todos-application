import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from './actionTypes';

export const added = (todos) => {
    return {
        type: ADDED,
        payload: todos
    }
}

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
          todoId,
          color
        }
    }
}

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}