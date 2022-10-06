import { Items } from './../types/types';
import {createSlice,PayloadAction} from '@reduxjs/toolkit'


type Item ={
    text:string,
    author:string
}

type State ={
    items:Items[],
    status:string,
    error:string,
    item:Item
}

const initialState:State={
    items:[],
    status:'',
    error:'',
    item:{
        text:'',
        author:''
    }
}


const QuotesSlice = createSlice({
    name:'quotes',
    initialState,
    reducers:{
        setQuotes:(state,action:PayloadAction<[]>)=>{
        state.items=[...action.payload]
        state.status = 'SUCCESS'
        },
        addQuotes:(state,action:PayloadAction<Items>)=>{
          state.items = state.items.concat(action.payload)
        },
        detailsQuotes:(state,action:PayloadAction<Item>)=>{
          state.item = action.payload
          state.status = 'SUCCESS'
        },
        loadingQuotes:(state)=>{
           state.status = 'LOADING'
        },
        errorQuotes:(state,action:PayloadAction<any>)=>{
            state.status = 'ERROR'
            state.error = action.payload
        },
        sortingQuotes:(state:State)=>{
            const newItems = state.items.map((item:Items,i:number)=>{
                return {...item,index:i}
            })
          state.items =newItems.slice().sort((a,b)=>{
          return b.index - a.index
        })
        }
    }
})



export const {setQuotes,loadingQuotes,errorQuotes,sortingQuotes,addQuotes,detailsQuotes} = QuotesSlice.actions
export default QuotesSlice.reducer