import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo , deleteTodo, editTodo } from './config/Redux/reducers/todo.Slice';

function App() {

  const todoVal = useRef()
  const dispatch = useDispatch()

  //selector

  const selector = useSelector(state => state.todo.todo);

  console.log(selector);
  
  
  
  const addTodoInRedux = (event) => {
    
    event.preventDefault()
    
    dispatch(addTodo({
      title:todoVal.current.value
    }))
    
    todoVal.current.value=""
    
    console.log('Todo added sucessfully!');
     
    }



    const deleteTodoFromRedux = (index) => {

      dispatch(deleteTodo({
        index
      }))


    }


     const editTodoFromRedux = (index) => {

      dispatch(editTodo({
        index
      }))


    }



  return (
    <>

    <form onSubmit={addTodoInRedux}>
      <input type="text" placeholder='Enter todo' ref={todoVal} />
      <button >Add todo</button>
    </form>
{
  selector.length!=0 ? selector.map((item , index) => {
    return(
      <div key={item.id}>
        <ul>
          <li key={item.id}>
            {item.title}
            <button onClick={() => editTodoFromRedux(index)} style={{marginRight:'10px' , marginLeft:'10px'}}>Edit</button>
            <button onClick={() => deleteTodoFromRedux(index)}>Delete</button>
          </li>
        </ul>
      </div>
    )
  }):<p>No Data Found...</p>
}
    
    
    
    </>
  )
}

export default App