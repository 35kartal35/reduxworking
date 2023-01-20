import actionTypes from "../actions/actionTypes"

const initialTodosState={
    todos:[]
}

const todosReducer=(state=initialTodosState,action)=>{
    if(action.type === actionTypes.TODO_EKLE){
        return{
            todos:[...state.todos,action.payload]
        }
    }
    return state

}

export default todosReducer;