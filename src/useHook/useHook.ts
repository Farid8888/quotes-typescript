import {useReducer,useCallback} from 'react'
import {Comment} from '../types/types'


type Item ={
  author:string,
  text:string,
  id?:string
}

type State ={
  data:any[],
  status:any,
  error:any
}

const initialState:State={
  data:[],
  status:null,
  error:null
}

type ACT ={
  payload?:any,
  type:string
}
const reducer =(state=initialState,action:ACT)=>{
  if(action.type === 'SEND'){
     return {data:state.data,status:'LOADING',error:state.error};
     }
     if(action.type === 'SUCCESS'){
      return {data:action.payload,status:'SUCCESS',error:state.error};
      }
    if(action.type === 'ERROR'){
        return {data:state.data,status:'ERROR',error:action.payload};
        }
   return state
  }


export default function useHook(requestFunction:any) {
const [hookState,dispatch] = useReducer(reducer,initialState)
const sendRequest =useCallback(async(requestData?:any)=>{
  dispatch({type:'SEND'})
  try{
    const responseData = await requestFunction(requestData)
     dispatch({type:'SUCCESS',payload:responseData})
  }catch(e:any){
    dispatch({type:'ERROR',payload:e.message})
  }
},[requestFunction,dispatch])
  return {
     sendRequest,
     ...hookState
  }
}
