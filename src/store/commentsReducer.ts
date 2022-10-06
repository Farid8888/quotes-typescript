import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {Comment} from '../types/types'


type State ={
    comments:Comment[],
    status:string,
    error:string,
}

const initialState:State={
    comments:[],
    status:'',
    error:'',
}


const commentSlice = createSlice({
    name:'comment',
    initialState,
    reducers:{
        setComments:(state,action:PayloadAction<Comment[]>)=>{
         state.comments = [...action.payload]
         state.status = 'SUCCESS'
        },
        addComments:(state,action:PayloadAction<Comment>)=>{
           state.comments = state.comments.concat(action.payload)
           state.status = 'SUCCESS'
        },
        loadingComments:(state)=>{
            state.status = 'LOADING'
         },
         errorComments:(state,action:PayloadAction<any>)=>{
             state.status = 'ERROR'
             state.error = action.payload
         },
    }
})


export const {addComments,setComments,loadingComments,errorComments} = commentSlice.actions
export default commentSlice.reducer