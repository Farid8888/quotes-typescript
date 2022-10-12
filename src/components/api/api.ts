import {Items,Comment} from '../../types/types'



export const setQuotes =async()=>{
    const response = await fetch('https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes.json')
    if(!response.ok){
        return new Error('FAILED')
    }
    const data = await response.json()
    let items:any =[]
    for(let key in data){
        items.push({...data[key],id:key})
    }
   return items
}

export const sendQuotes =async(items:Items)=>{
        const response = await fetch('https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes.json',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(items)
        })
        const data = await response.json()
        if(!response.ok){
            throw new Error('Sending failed')
        }
    }

    export const setComments =async(id:any)=>{
        const response = await fetch(`https://quotes-fd6ed-default-rtdb.firebaseio.com/comments/${id}.json`)
        if(!response.ok){
            return new Error('FAILED')
        }
        const data = await response.json()
        let items:any =[]
        for(let key in data){
            items = [...items,{...data[key],id:key}]
        }
       return items
    }   


    export const addComments =async(items:Comment)=>{
        const response = await fetch(`https://quotes-fd6ed-default-rtdb.firebaseio.com/comments/${items.ID}.json`,{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(items)
        })
        const data = await response.json()
        if(!response.ok){
            throw new Error('Sending failed')
        }
        const comment ={
            ...data,
            id:data.name
        }
        return comment
    }

    export const quotesDetails =async(id:any)=>{
        const response = await fetch(`https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes/${id}.json`)
        const data = await response.json()
       const item ={
        ...data,
        id:data.name
       }
        if(!response.ok){
            throw new Error('Sending failed')
        }
     return item

    }