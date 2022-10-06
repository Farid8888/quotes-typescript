import React from 'react'
import classes from './Card.module.css'
import { Props } from '../../types/types'

const Card:React.FC<Props | any>=(props)=> {
  return (
    <div className={`${props.cl} ${classes.card}`}>
      {props.children}
    </div>
  )
}

export  default Card
