import React,{useEffect} from 'react'
import {fetchUsers} from './userslice'
import {useSelector,useDispatch} from 'react-redux'
const UserView = () => {
const data=useSelector(data=>data)
   const {error,loading,users}=data.user


// console.log("data",data )
const dispatch=useDispatch()

useEffect(()=>{
   const getdatat=()=>{
 dispatch(fetchUsers("https://jsonplaceholder.typicode.com/users"))


   }
   getdatat()

},[])
  return (
    <div>
{loading&&"loading"}
{users.length>0&&users.map((row,index)=>{
    return<h1>{row}</h1>
})}


{error&&error}
        
    </div>
  )
}

export default UserView