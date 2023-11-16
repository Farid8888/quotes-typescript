import React,{useEffect} from 'react'
import QuotesDetails from '../Quotes/QuotesDetails'
import {useParams} from 'react-router-dom'
import {quotesDetails} from '../../store/actions'
import {useAppDispatch,useAppSelector} from '../hooks/hooks'

export default function QuotesDetailsPage() {
    const params =useParams()
    const dispatch = useAppDispatch()
    const quotes = useAppSelector(state=>state.quotes)
    const {id} = params
    useEffect(()=>{
        dispatch(quotesDetails(id))
    },[id,dispatch])
  return (
    <div>
      <QuotesDetails item={quotes.item} id={id}/>
    </div>
  )
}
