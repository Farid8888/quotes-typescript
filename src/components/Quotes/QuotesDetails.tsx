import React, { useState,useRef } from "react";
import { useAppSelector,useAppDispatch } from "../hooks/hooks";
import Card from "../UI/Card";
import {sendComments} from '../../store/actions'
import classes from "./QuotesDetails.module.css";
import Comments from "../Comments/Comments";
import LoadingSpinner from "../UI/LoadingSpinner";
import M from 'materialize-css'

type Item = {
  text: string;
  author: string;
};

type Props = {
  item: Item;
  id?:string
};

const QuotesDetails: React.FC<Props> = (props) => {
  const quotes = useAppSelector((state) => state.quotes);
  const comments = useAppSelector((state)=>state.comments)
  const dispatch = useAppDispatch()
  const [com, setCom] = useState(false);
  const [load,setLoad] =useState(false)
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const submitHandler =(event:React.FormEvent)=>{
   event.preventDefault()
   const obj ={
    comment:commentRef.current!.value
   }
   if(commentRef.current!.value.trim() === ''){
    return M.toast({html:'Please enter a value'})
   }else{
    dispatch(sendComments(obj,props.id))
   }
  }
  if (quotes.status === "LOADING") {
    return (
      <div style={{ marginTop: "10rem", textAlign: "center" }}>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <Card>
      <figure className={classes.fgr}>
        <div className={classes.details}>
          <h3>{props.item.author}</h3>
          <p>{props.item.text}</p>
        </div>
        <div>
          {!load && <div className={classes.btn}>
            <button type="button" onClick={()=>setLoad(true)}>Load comments</button>
          </div>}
          {load && <div>
           <h5>User Comments</h5>
            {!com && (
              <button
                className={classes.btn2}
                type="button"
                onClick={() => setCom(true)}
              >
                Add Comments
              </button>
            )}
            {com && <form onSubmit={submitHandler}>
                {comments.status === 'LOADING' && <div style={{}}><LoadingSpinner/></div>}
                <label htmlFor="comment">Your Comment</label>
                <textarea rows={7} id='comment' ref={commentRef}/>
                <button
                className={classes.btn2}
                type="submit"
              >
                Add Comment
              </button>
                </form>}
            {comments.comments.length === 0 ? <p>Not comments added yet</p>
            : <Comments id={props.id}/>}
          </div>}
        </div>
      </figure>
    </Card>
  );
};

export default QuotesDetails;
