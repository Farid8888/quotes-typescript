import React,{useEffect} from 'react'
import {useAppDispatch,useAppSelector} from '../hooks/hooks'
import {settingComments} from '../../store/actions'
import CommentsItem from '../Comments/CommentsItem'


type ID ={
    id?:string
}

const Comments:React.FC<ID>=(props)=> {
    const dispatch = useAppDispatch()
    const comments = useAppSelector(state=>state.comments)
    console.log(comments.comments)
    const {id} =props
  useEffect(()=>{
   dispatch(settingComments(id))
  },[dispatch,id])

  return (
    <div>
      {comments.comments.map(comment=>{
        return <CommentsItem key={comment.id} comment={comment.comment}/>
      })}
    </div>
  )
}

export default Comments
