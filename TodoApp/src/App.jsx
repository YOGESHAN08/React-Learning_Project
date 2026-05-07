
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [todos, settodos] = useState([])
  const [todo, settodo] = useState("")
  const [error, seterror] = useState("")
  const [editId, seteditId] = useState(null)

  const handleAdd = () => {
    settodos([...todos, { todo, id: Date.now(), iscompleted: false }])
    settodo("")
    console.log(todos)
  }

  const handleUpdate = () => {
    const UpdatedTodo = todos.map(item =>{
      if(item.id === editId){
        return {...item,todo}
      }
      return item
    })
    settodos(UpdatedTodo)
    seteditId(null)
    settodo('')
  }


  const handledelete = (id) => {
    settodos(prev => prev.filter(items => items.id !== id));

  }
  const handleChnages = (e) => { settodo(e.target.name) }
  const handleCheckbox = (e) => {
    let id = Number(e.target.name);
    let index = todos.findIndex(item => item.id === id);
    let NewTodo = [...todos];
    NewTodo[index].iscompleted = !NewTodo[index].iscompleted;
    settodos(NewTodo);
    console.log(e)
  }

  const handleEdit = (items) => {
    settodo(items.todo)
    seteditId(items.id)
    
    console.log("done")
  }





  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10 ">
        <div className="bg-red-300 rounded-2xl  p-3">
          <div className=" gap-3 flex m-3 ">

            <h2>Add Todo</h2>
            <input onChange={(e) => {
              handleChnages(e)
              settodo(e.target.value)
            }} value={todo} className='bg-white w-[40%]  rounded-md outline-none px-2'
              // onChange={(e) => }
              type="text" />

            <button onClick={editId ? handleUpdate : handleAdd} 
            className='bg-white rounded-2xl  px-5'>   {editId ? "Update" : "Add"}
          
            </button>


          </div>


          <h1 className='flex items-center justify-center text-2xl font-extrabold uppercase font-serif '>
            your todos
          </h1>

          <div className="todos">
            <div className="todo flex items-center ">
              <div className="lorem10">
                {todos.map((items, id) => <div className='flex gap-3 items-center' >



                  <input
                    name={items.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={items.iscompleted}
                  />

                  <div className={items.iscompleted ? "line-through" : ""}>
                    {items.todo}
                  </div>

                  <button onClick={() => {
                    handleEdit(items)
                  }} 
                  disabled={items.iscompleted === true}
                  className='bg-white rounded-2xl px-5 m-5 disabled:opacity-50' >
                    Edit
                  </button>
                  <button onClick={() => {
                    handledelete(items.id)
                    console.log(items.id)
                  }} className='bg-white rounded-2xl px-5 m-5' >delete</button>

                </div>

                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>

  )
}

export default App