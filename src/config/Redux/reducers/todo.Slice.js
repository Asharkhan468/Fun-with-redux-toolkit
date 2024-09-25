import { createSlice , nanoid } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name:'Todos',
    initialState:{
        todo:[]
    },

    reducers:{

        addTodo:(state , action) => {
            state.todo.push({
                title:action.payload.title,
                id:nanoid()
            })

        },

        deleteTodo:(state , action) => {

            state.todo.splice(action.payload.index , 1)
            
        },

        editTodo: (state , action) => {

            const editedValue = prompt('Enter Edited Value');

            console.log(editedValue , action.payload.index);
            

state.todo.splice(action.payload.index , 1 , {...state.todo , title: editedValue})

        }



    }
})

export const  {addTodo , deleteTodo , editTodo} = todoSlice.actions
export default todoSlice.reducer