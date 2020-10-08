// define create to do action app will fire when user types new todo in form
// and clicks button
export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    // object contains text of new TODO when we trigger
    type: CREATE_TODO,
    payload: { text },
});

// Action for removing item
// using text of todo as unique identifier to delete item
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type:REMOVE_TODO,
    payload: { text },
});
