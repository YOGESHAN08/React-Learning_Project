import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [todos, settodos] = useState([])
  const [todo, settodo] = useState("")
  const [error, seterror] = useState("")

  const handleAdd = () => {
    settodos([...todos, { todo, id: Date.now(), iscompleted: false }])
    settodo("")
    console.log(todos)
  }

  const handleEdit = () => { }
  const handledelete = (id) => {
    settodos(prev => prev.filter(items => items.id !== id));

  }
  const handleChnages = (e) => { settodo(e.target.value) }
  const handleCheckbox = (e) => {
    console.log(e)
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
            }} value={todo} className='bg-white w-[40%]  rounded-md outline-none px-2' type="text" />
            <button onClick={handleAdd} className='bg-white rounded-2xl  px-5'>add</button>


          </div>


          <h1 className='flex items-center justify-center text-2xl font-extrabold uppercase font-serif '>
            your todos
          </h1>

          <div className="todos">
            <div className="todo flex items-center ">
              <div className="lorem10">
                {todos.map((items, id) => <div className='flex gap-3' >



                  <input onChange={() => {
                    handleCheckbox(!todo.iscompleted)
                    // console.log(items.iscompleted)
                  }} value={todo.iscompleted} type="checkbox" checked={todo.iscompleted} name={todo.id} id="iscompleted" />



                  <div className={items.completed ? "line-through" : ""} key={id} >
                    {items.todo}

                    <button onClick={handleEdit} className='bg-white rounded-2xl px-5 m-5' >Edit</button>
                    <button onClick={() => {
                      handledelete(items.id)
                      console.log(items.id)
                    }} className='bg-white rounded-2xl px-5 m-5' >delete</button>
                  </div>
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