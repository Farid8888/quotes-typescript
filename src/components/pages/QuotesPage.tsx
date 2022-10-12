import React,{useEffect} from 'react'
import Quotes from '../Quotes/Quotes'
import LoadingSpinner from '../UI/LoadingSpinner'
import useHook from '../../useHook/useHook'
import {setQuotes} from '../api/api'


export default function QuotesPage() {
    const {sendRequest,data,status,error} = useHook(setQuotes)
    console.log(data)
    useEffect(()=>{
        sendRequest()
        console.log('hookkkkkkkkkkkk')
    },[sendRequest])
    if(status === 'LOADING'){
        return <div style={{textAlign:'center',marginTop:'5rem'}}><LoadingSpinner/></div>
    }else if(status === 'ERROR'){
        return <div style={{marginTop:'5rem',textAlign:'center'}}>{error}</div>
    }
  return (
    <>
    {data.length === 0 ? <div style={{textAlign:'center',marginTop:'10rem'}}>Not added yet</div>:
    <div>
      <Quotes quotes={data}/>
    </div>}
    </>
  )
}
