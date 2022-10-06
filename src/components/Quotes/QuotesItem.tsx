import React from 'react'
import {Items} from '../../types/types'
import classes from './QuotesItem.module.css'
import {useNavigate,useLocation} from 'react-router-dom'

const QuotesItem:React.FC<Items>=(props)=> {
    const navigate = useNavigate()
    const location =useLocation()
    const handler =()=>{
        navigate(location.pathname + '/' + props.id)
    }
    console.log(props.id)
  return (
    <div className={classes.items}>
      <div>
        <p>{props.author}</p>
        <p>{props.text}</p>
      </div>
      <div className={classes.btn}>
        <button type='button' onClick={handler}>
            View Fullscreen
        </button>
      </div>
    </div>
  )
}

export default QuotesItem
