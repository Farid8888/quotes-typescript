import React,{useState,useEffect} from 'react'
import QuotesItem from './QuotesItem'
import Card from '../UI/Card'
import classes from './Quotes.module.css'
import {Items} from '../../types/types'
import {useLocation,useNavigate} from 'react-router'


type Q={
    quotes:Items[]
}

const Quotes:React.FC<Q> = (props)=>{
    const [sort,setSort] = useState<boolean>(false)
    const [quotes,setQuotes] = useState(props.quotes)
    const location =useLocation()
    const navigate=useNavigate()
    const changeSort =()=>{
    const items = quotes.map((item:Items,i:number)=>{
        return {...item,index:i}
    })
    items.sort((a:any,b:any)=>{
        return b.index - a.index
    })
    console.log(items,'dsdsdsdsd')
    setQuotes(items)
        setSort(prevst=>{
            return !prevst
        })
    }
    useEffect(()=>{
        if(sort){
            navigate(location.pathname + '?sort=asc')
        }else{
            navigate(location.pathname + '?sort=desc')
        }
    },[sort])
    return(
       <Card>
        <div className={classes.btn}>
        <button type='button' onClick={changeSort}>
            {!sort ? 'Sort Acsending' : 'Sort Descsending'}
        </button>
        </div>
        {quotes.map(quote=>{
            return <QuotesItem key={quote.id} text={quote.text} author={quote.author} id={quote.id}/> 
  
        })}
       </Card>
    )
}

export default Quotes
