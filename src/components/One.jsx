//import React, { useContext } from 'react'
import {  useContextCustom } from '../context/stateContext'

const One = () => {
    //const {count}=useContext(StateContext);
    const {state}=useContextCustom();

  return (
    <div>
        <h1 className='text-2xl'>Count : {state.count}</h1>
    </div>
  )
}

export default One