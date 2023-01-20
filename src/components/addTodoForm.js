import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../redux2/actions/actionTypes";


const addTodoForm = ()=>{
    const [text,setText]=useState("");
    const dispatch=useDispatch()
    const handleSubmit=(event)=>{
        event.preventDefault()
        const newTodo={
            id:String(new Date().getTime()),
            text:text,
            İsDone:true,
            date:new Date()
        }
        dispatch({type:actionTypes.TODO_EKLE,payload:newTodo})
        setText("")
    }

    }



    return(
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(event)=>setText(event.target.value)}/>
    
            <button type="submit">Ekle</button>
        </form>
    )

    export default addTodoForm;