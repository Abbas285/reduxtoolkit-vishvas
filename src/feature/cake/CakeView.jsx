import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered, restocked} from './../cake/cakeSlice'
const CakeView = () => {
    const data=useSelector(state=>state)
    const {cake} =data

    const dispatch=useDispatch()
  return (
    <div>
Number of Cakes  ={cake.numberofCakes}<br/>

<button onClick={()=>dispatch(ordered())}>Order of Cakes</button><br/>
<button onClick={()=>dispatch(restocked(31))}>Restock Cakes</button><br/>

    </div>
  )
}

export default CakeView