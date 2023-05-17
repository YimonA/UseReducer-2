import React from 'react'
import { useContextCustom } from '../context/stateContext';

const Five = () => {
    const {state}=useContextCustom();

  return (
    <div>
        <h1 className='text-2xl'>Value : {state.value}</h1>
        
    </div>
  )
}

export default Five