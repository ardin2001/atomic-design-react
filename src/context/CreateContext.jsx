import { createContext, useReducer,  } from "react";

const ContextTheme = createContext(true);

function TotalPriceReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return { total: action.payload.total };
    default:
      return state;
  }
}

const TotalPriceContext = createContext({total:0});
const TotalPriceDispatchContext = createContext(null);

function TotalpriceProvider({ children }) {
  const [state, dispatch] = useReducer(TotalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={state}>
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

export { ContextTheme,TotalpriceProvider,TotalPriceContext,TotalPriceDispatchContext };
