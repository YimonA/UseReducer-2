import React, { useContext } from 'react'
import {  useContextCustom } from '../context/stateContext'

const Four = () => {
    //const {setCount}=useContext(StateContext)
    const {dispatch}=useContextCustom();

  return (
    <div>
        <button
          onClick={() => dispatch({ type: "increase-2"})}
          className=" btn btn-primary ml-6"
        >
          +10 by Value
        </button>
    </div>
  )
}

export default Four