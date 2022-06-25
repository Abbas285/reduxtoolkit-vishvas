import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { ordericecream, refellicream} from './icecream'
const IcreamView = () => {
    const data=useSelector(data=>data)
    const dispatch=useDispatch()

  return (
    <div>


        Number of icreeam {data.icecream.numberoficreem}
<button onClick={()=>dispatch(ordericecream(2))}>Order of icreeam</button>
<button onClick={()=>dispatch(refellicream(2))}>Restock icreeam</button>
    </div>
  )
}

export default IcreamView