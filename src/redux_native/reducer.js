const Reducer = (state = [], action = {}) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "DELETE_TODO":
        return state.filter((data) => data.id != action.payload.id);
      case "COMPLETE_TODO":
        return state.map((data) =>{
          if (data.id == action.payload.id){
              data.complete = action.payload.status;
          }
          return data;
        });
      default:
        state;
    }
  };
  
  export default Reducer;