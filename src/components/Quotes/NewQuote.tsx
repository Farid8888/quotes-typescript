import React,{useRef,useReducer, useEffect, ChangeEvent} from 'react'
import Card from '../UI/Card'
import classes from './NewQuote.module.css'
import {sendQuotes} from '../../store/actions'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch} from '../hooks/hooks'
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css'



const NewQuote=()=> {
 const navigate=useNavigate()   
 const dispatch = useAppDispatch() 

type State ={
    authorVal:{
        touched:boolean,
        enteredValue:string,
        valid:boolean
    },
    textVal:{
        touched:boolean,
        enteredValue:string,
        valid:boolean
    },
    validation:boolean
}

type AuxAction ={
    type:string,
    payload?:any
}

 const initilaState:State={
    authorVal:{
        touched:false,
        enteredValue:'',
        valid:false
    },
    textVal:{
        touched:false,
        enteredValue:'',
        valid:false
    },
    validation:false
 }
const authorRef = useRef<HTMLInputElement>(null)
const textRef = useRef<HTMLTextAreaElement>(null)
const reducer =(state:State=initilaState,action:AuxAction)=>{
switch(action.type){
    case('TOUCH AUTHOR'):return {...state,authorVal:{...state.authorVal,touched:true}}
    case('CHANGE AUTHOR'):return {...state,authorVal:{...state.authorVal,enteredValue:action.payload}}
    case('VAL AUTHOR'):return {...state,authorVal:{...state.authorVal,valid:action.payload}}
    case('TOUCH TEXT'):return {...state,textVal:{...state.textVal,touched:true}}
    case('CHANGE TEXT'):return {...state,textVal:{...state.textVal,enteredValue:action.payload}}
    case('VAL TEXT'):return {...state,textVal:{...state.textVal,valid:action.payload}}
    case('NOT VAL'):return {...state,validation:action.payload}
    default:return initilaState 
}
}
const [state,dsth] = useReducer(reducer,initilaState)
const toastAction =()=>{
    M.toast({html: 'FORM ERROR,Please set values',classes:classes.toast})
}
const submitHandler=(e:React.FormEvent)=>{
    e.preventDefault()
const author = authorRef.current!.value
const text = textRef.current!.value
const obj ={
    author:author,
    text:text
}

const {enteredValue:auhtVal} = state.authorVal
const {enteredValue:textVal} = state.textVal
if(auhtVal.trim() === '' || textVal.trim() === ''){
   dsth({type:'NOT VAL',payload:true})
   
}
else{
    dispatch(sendQuotes(obj))
    navigate('/quotes')
}

}
const auhtVal = state.authorVal.enteredValue
    const atouched = state.authorVal.touched
    const textVal = state.textVal.enteredValue
    const ttouched = state.textVal.touched
useEffect(()=>{
    if(auhtVal.trim() === '' && atouched ){
       dsth({type:'VAL AUTHOR',payload:true})
    }else{
        dsth({type:'VAL AUTHOR',payload:false})
    }
    if(textVal.trim() === '' && ttouched ){
      dsth({type:'VAL TEXT',payload:true})
    }else{
        dsth({type:'VAL TEXT',payload:false})
    }
    if(state.validation){
        dsth({type:'NOT VAL',payload:false})
        return toastAction()
    }

},[auhtVal,atouched,textVal,ttouched,state.validation])

const onChangeInput =(event:ChangeEvent<HTMLInputElement>)=>{
 dsth({type:'TOUCH AUTHOR'})
 dsth({type:'CHANGE AUTHOR',payload:event.target.value})
}

const onChangeTextArea =(event:ChangeEvent<HTMLTextAreaElement>)=>{
    dsth({type:'CHANGE TEXT',payload:event.target.value})
    dsth({type:'TOUCH TEXT'})
}
  return (
    <Card cl={classes.cardQuote}>
    <form onSubmit={submitHandler}>
        <div className={classes.quote}>
      <div className={classes.inp}>
        <label htmlFor='author'>Author</label>
        <input id='author' name='auhthor' ref={authorRef} onChange={onChangeInput}/>
        {state.authorVal.valid && <p style={{color:'red',margin:0}}>Please enter a value</p>}
      </div>
      <div className={classes.inp}>
        <label htmlFor='text'>Text</label>
       <textarea id='text' name='text' rows={7} ref={textRef} onChange={onChangeTextArea}/>
       {state.textVal.valid && <p style={{color:'red',margin:0}}>Please enter a value</p>}
      </div>
      </div>
      <div className={classes.btn}>
        <button type='submit'>
            Add Quote
        </button>
      </div>
    </form>
    </Card>
  )
}

export default NewQuote
