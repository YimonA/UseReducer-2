import { createContext, useContext, useReducer, useState } from "react";

  const StateContext=createContext();

 export const StateContextProvider=({children})=>{
    const initialState = {
        count: 0,
        value: 10,
      };
    
      const reducer = (state, action) => {
        switch (action.type) {
          case "increase":
            return { ...state, count: state.count + action.payLoad };
          case "increase-2":
            return { ...state, value: state.value + 10 };
          case "decrease":
            return state - 1;
          case "reset":
            return 0;
          default:
            return state;
        }
      };
    
      const [state, dispatch] = useReducer(reducer, initialState);

    const data={state,dispatch}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
 }

 export const useContextCustom=()=>useContext(StateContext);