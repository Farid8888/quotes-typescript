import {setQuotes,loadingQuotes,errorQuotes,addQuotes,detailsQuotes} from '../store/reducer'
import {setComments,addComments,loadingComments,errorComments} from '../store/commentsReducer'
import {Items,Comment} from '../types/types'



export const fetchQuotes =()=>{
    return async (dispatch:any)=>{
        dispatch(loadingQuotes())
        const fethData =async()=>{
            const response = await fetch('https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes.json')
            if(!response.ok){
                throw new Error('Data Error')
            }
                  const data = await response.json()
                  let items:Items | any =[]
                  for(let key in data){
                    items = [...items,{...data[key],id:key}]
                  }
                   dispatch(setQuotes(items))
        }
            try{
                await fethData()
            }catch(error:any){
                console.log(error)
                dispatch((errorQuotes(error.message)))
            }
    }
}


export const sendQuotes =(items:Items)=>{
    return async (dispatch:any)=>{
        dispatch(loadingQuotes())
        const fethData =async()=>{
            const response = await fetch('https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes.json',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(items)
            })
            if(!response.ok){
                throw new Error('Request Error')
            }
            const data = await response.json()
            console.log(data)
                    dispatch(addQuotes({...items,id:data.name}))
        }
            try{
                await fethData()
            }catch(error:any){
                console.log(error)
                dispatch((errorQuotes(error.message)))
            }
    }
}




export const quotesDetails =(id:any)=>{
    return async (dispatch:any)=>{
        dispatch(loadingQuotes())
        const fethData =async()=>{
            const response = await fetch(`https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes/${id}.json`)
            if(!response.ok){
                throw new Error('Request Error')
            }
            const data = await response.json()
                    dispatch(detailsQuotes(data))
        }
            try{
                await fethData()
            }catch(error:any){
                console.log(error)
                dispatch((errorQuotes(error.message)))
            }
    }
}



export const sendComments =(items:Comment,id:any)=>{
    return async (dispatch:any)=>{
        dispatch(loadingComments())
        const fethData =async()=>{
            const response = await fetch(`https://quotes-fd6ed-default-rtdb.firebaseio.com/comments/${id}.json`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(items)
            })
            if(!response.ok){
                throw new Error('Request Error')
            }
            const data = await response.json()
            console.log(data)
                    dispatch(addComments({...items,id:data.name}))
        }
            try{
                await fethData()
            }catch(error:any){
                console.log(error)
                dispatch((errorComments(error.message)))
            }
    }
}


export const settingComments =(id:any)=>{
    return async (dispatch:any)=>{
        dispatch(loadingComments())
        const fethData =async()=>{
            const response = await fetch(`https://quotes-fd6ed-default-rtdb.firebaseio.com/comments/${id}.json`)
            if(!response.ok){
                throw new Error('Request Error')
            }
            const data = await response.json()
            console.log(data)
            let items =[]
            for(let key in data){
                 items.push({...data[key],id:key})
            }
            dispatch(setComments(items))
        }
            try{
                await fethData()
            }catch(error:any){
                console.log(error)
                dispatch((errorComments(error.message)))
            }
    }
}