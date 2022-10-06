import React,{useState,useEffect} from 'react'
import QuotesItem from './QuotesItem'
import {useAppDispatch} from '../hooks/hooks'
import Card from '../UI/Card'
import classes from './Quotes.module.css'
import {Items} from '../../types/types'
import {sortingQuotes} from '../../store/reducer'
import {useLocation,useNavigate} from 'react-router'


type Q={
    quotes:Items[]
}

const Quotes:React.FC<Q> = (props)=>{
    const [sort,setSort] = useState<boolean>(false)
    const location =useLocation()
    const navigate=useNavigate()
    console.log(location)
    const dispatch = useAppDispatch()
    const changeSort =()=>{
        dispatch(sortingQuotes())
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
        {props.quotes.map(quote=>{
            return <QuotesItem key={quote.id} text={quote.text} author={quote.author} id={quote.id}/> 
  
        })}
       </Card>
    )
}

export default Quotes
