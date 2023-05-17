import React, { useReducer } from "react";
import One from "./components/One";
import Five from "./components/Five";
import Four from "./components/Four";
import Three from "./components/Three"


const App = () => {

  return (
    <div className=" container mx-auto">
      <One/>
      <Five/>
      <Four/>
      <Three/>
      

      {/*<div className=" m-10">
        <button
          onClick={() => dispatch({ type: "decrease" })}
          className=" btn btn-primary ml-6"
        >
          -1 by Count
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className=" btn btn-primary ml-6"
        >
          Reset by Count
        </button>
      </div>
      <div className=" m-10">
        <h1 className=" text-2xl">Value -{state.value}</h1>
        <button
          onClick={() => dispatch({ type: "increase-2" })}
          className=" btn btn-primary ml-6"
        >
          +10 by Value
        </button>

        <button
          onClick={() => dispatch({ type: "decrease" })}
          className=" btn btn-primary ml-6"
        >
          -1 by Value
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className=" btn btn-primary ml-6"
        >
          Reset by Value
        </button>
  </div>*/}
    </div>
  );
};

export default App;
