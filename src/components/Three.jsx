import React, { useContext } from 'react'
import { useContextCustom } from '../context/stateContext';

const Three = () => {
    //const {setCount}=useContext(StateContext)
    const {dispatch}=useContextCustom();

  return (
    <div>
      <button
          onClick={() => dispatch({ type: "increase" ,payLoad:5})}
          className=" btn btn-primary ml-6"
        >
          +5 by Count payLoad
        </button>
    </div>
  )
}

export default Three