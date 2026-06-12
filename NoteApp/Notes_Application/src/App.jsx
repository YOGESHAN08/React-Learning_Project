// import lucide from 'lucide'
import { X } from 'lucide-react';
import { useState } from 'react'
import './App.css'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(`title is = ${title}, and details about note is = ${details}`)

    const CopyTask = [...task];
    CopyTask.push({ title, details })
    setTask(CopyTask);
    console.log(CopyTask)

    setTitle('')
    setDetails('')
  }
  const DeketNote = (idx) => {
    // console.log("delete mote")
    const CopyTask = [...task];
    // console.log(CopyTask)
    CopyTask.splice(idx, 1)
    setTask(CopyTask)
  }
  return (
    <div className='h-screen lg:flex   p-8 bg-black' >

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex items-start lg:w-2/4 lg:border-r-2 border-white p-3' >

        <div className="outline-none w-3/4  gap-3  rounded-[25px] border-2 border-white flex items-start flex-col ">
          <div className="text-2xl font-bold text-white text-center mt-3 ml-4  leading-none">This is your Notes</div>

          <input
            className='border w-full outline-none border-b-0 border-l-0 border-r-0 px-3 h-10 text-white'
            type="text"
            value={title} required
            placeholder='Enter Note Title'
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          <textarea
            className='border resize-none w-full h-20 px-3 outline-none text-white border-b-0 border-l-0 border-r-0'
            type="text"
            value={details} required
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            placeholder='Enter Note Details'
          />
          <button onClick={submitHandler} type='submit' className=' w-full bg-gray-300 text-black rounded-b-full active:bg-gray-400 ' >Add Note</button>
        </div>
      </form>
      <div className="flex lg:w-1/2  flex-col h-[90%] ">

        <div className="text-3xl font-bold text-white text-center mb-6 leading-none">Recent Notes</div>

        <div className="flex flex-wrap p-2 overflow-auto  justify-center gap-4">
          {task.map((task, idx) => {
            // console.log(task.details)      
            return <div key={idx} className="bg-gray-400 relative  h-52 w-40  bg-center bg-size-[150%] bg-[url('https://tse4.mm.bing.net/th/id/OIP.M0l8dFVcpaco5kuugWaScAAAAA?pid=ImgDet&w=192&h=192&c=7&o=7&rm=3')] rounded-3xl">
              <div className="text  m-2 ">

                <h2 className='bg-amber-400 absolute cursor-pointer active:scale-95 top-2 right-3 w-fit rounded-full text-white' onClick={() => {
                  DeketNote(idx)
                }} > <X /></h2>
                <h1 className='leading-tight font-semibold text-[50] mt-4 items-center ' >{task.title}</h1>
                <p className=' flex flex-wrap whitespace-normal wrap-break-words leading-tight font-serif text-xxl mt-2 text-gray-800' >{task.details}</p>
              </div>

            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App
