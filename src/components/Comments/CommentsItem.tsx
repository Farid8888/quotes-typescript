import React from 'react'
import classes from './CommentsItem.module.css'


type Comment ={
    comment:string
}

const CommentsItem:React.FC<Comment>=(props)=> {
  return (
    <div className={classes.item}>
       {props.comment}
    </div>
  )
}

export default CommentsItem
