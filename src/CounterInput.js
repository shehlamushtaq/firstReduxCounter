import React from 'react'
import { incAction,decAction } from './store/Actions'
import {useDispatch} from 'react-redux'
const CounterInput = () => {

    const dispatch =useDispatch()
    return (
        <div>
            <h3>Dispatch through Action</h3>
           <button onClick={()=> dispatch(incAction())}>+</button> 
           <button onClick={()=> dispatch(decAction())}>-</button> 
           <h3>Direct Dispatch</h3>
           <button onClick={()=> dispatch({type:"INCREAMENT"})}>+</button> 
           <button onClick={()=> dispatch({type:"DECREAMENT"})}>-</button> 
        </div>
    )
}

export default CounterInput
