const createStore = (Reducer) => {
    let state;
    let listeners = [];
  
    const getState = () => state;
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return(() =>{
        console.log("clean up!")
        listeners = listeners.filter((listenerItem) => listenerItem !== listener);
      })
    };
  
    const dispatch = (payload) => {
      state = Reducer(state, payload);
      listeners.forEach((listener) => listener());
    };
  
    return { getState, subscribe, dispatch };
  };
export default createStore;