import React,{useEffect} from 'react'
import QuotesDetails from '../Quotes/QuotesDetails'
import {useParams} from 'react-router-dom'
import useHook from '../../useHook/useHook'
import {quotesDetails} from '../api/api'


export default function QuotesDetailsPage() {
    const params =useParams()
    const {id} = params
    const {sendRequest,data} =useHook(quotesDetails)
    useEffect(()=>{
        sendRequest(id)
    },[id,sendRequest])
    console.log(data)
  return (
    <div>
      <QuotesDetails item={data} id={id}/>
    </div>
  )
}
