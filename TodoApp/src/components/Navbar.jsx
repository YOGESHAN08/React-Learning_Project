import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex text-white justify-between p-3 bg-gray-500">
            <div className="logo">
                <span className='font-bold m-5' >Task</span>
            </div>
            <ul className='flex gap-5'>
                <li className='cursor-pointer hover:font-bold hover:text-xl transition-all duration-200' >Home</li>
                <li className='cursor-pointer hover:font-bold hover:text-xl transition-all duration-200' >Tasks</li>
                <li className='cursor-pointer hover:font-bold hover:text-xl transition-all duration-200' >About </li>

            </ul>

        </nav>
    )
}

export default Navbar