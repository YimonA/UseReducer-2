import React, { useContext } from 'react'
import { useContextCustom } from '../context/stateContext';

const Two = () => {
    //const {setCount}=useContext(StateContext)
    const {count}=useContextCustom();

  return (
    <div>
        <button onClick={()=>setCount(prev=> prev+1)} className=" border-2 bg-slate-300">Increase ++</button>
    </div>
  )
}

export default Two