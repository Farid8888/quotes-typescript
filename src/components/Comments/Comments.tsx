import React,{useEffect} from 'react'
import {setComments} from '../api/api'
import useHook from '../../useHook/useHook'
import CommentsItem from '../Comments/CommentsItem'
import {Comment,Items} from '../../types/types'

type ID ={
    id?:string,
}
 type HookState ={
  data:Comment[],
  status:any,
  error:any,
  sendRequest:(id?:string)=>void
 }

const Comments:React.FC<ID>=(props)=> {
  const {data,status,sendRequest}:HookState= useHook(setComments)
  const {id} =props
  useEffect(()=>{
    sendRequest(id)
  },[sendRequest,id,status])
  return (
    <div>
      {data.length === 0 && status === 'SUCCESS' ? <p>Not comments added yet</p>: 
      <div>
      {data.map(comment=>{
        return <CommentsItem key={comment.id} comment={comment.comment}/>
      })}
      </div>}
    </div>
  )
}

export default Comments
