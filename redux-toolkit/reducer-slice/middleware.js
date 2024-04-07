function thunk(store) {
    return (next) => (action) => {
      if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
      }
   
      return next(action);
    };
  }
  
  function todoDeletionCheck(store){
    return (next) => (action) =>{
        if(action.type == "todos/deleteTodo"){
            const {todos} = store.getState();
            const todosToBeDeleted = todos.find(todo => todo.id == action.payload.id);
            if(!todosToBeDeleted.complete){
                return
            }
            return next(action)
        }
        return next(action)
    }
}
export { todoDeletionCheck, thunk };