import React,{useEffect} from 'react'
import Quotes from '../Quotes/Quotes'
import LoadingSpinner from '../UI/LoadingSpinner'
import {useAppDispatch,useAppSelector} from '../hooks/hooks'
import {fetchQuotes} from '../../store/actions'


export default function QuotesPage() {
    const dispatch = useAppDispatch()
    const quotes = useAppSelector((state)=>state.quotes)
    console.log(quotes.items)
    useEffect(()=>{
        dispatch(fetchQuotes())
    },[dispatch])
    if(quotes.status === 'LOADING'){
        return <div style={{textAlign:'center',marginTop:'5rem'}}><LoadingSpinner/></div>
    }else if(quotes.status === 'ERROR'){
        return <div style={{marginTop:'5rem',textAlign:'center'}}>{quotes.error}</div>
    }
  return (
    <div>
      <Quotes quotes={quotes.items}/>
    </div>
  )
}
