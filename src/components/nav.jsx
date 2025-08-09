import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-around items-center bg-slate-700 h-9'>
                <div className='logo flex justify-center'>
                    <span className='text-green-500 text-2xl font-bold'>&lt;</span><span className='font-bold text-white text-2xl'>pass</span><span className='text-green-500 text-2xl font-bold'>OP/&gt;</span>
                </div>
                <ul className='flex gap-4'>
                    <li className='text-white text-lg font-bold'><a href='#'>Home</a></li>
                    <li className='text-white text-lg font-bold'><a href='#'>About</a></li>
                    <li className='text-white text-lg font-bold'><a href='#'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar