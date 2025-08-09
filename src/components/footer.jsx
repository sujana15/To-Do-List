import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-slate-700 fixed w-full bottom-0 min-h-[10vh]'>
            <div className='logo flex justify-center'>
                <span className='text-green-500 text-2xl font-bold'>&lt;</span><span className='font-bold text-white text-2xl'>pass</span><span className='text-green-500 text-2xl font-bold'>OP/&gt;</span>
            </div>
            <div>
                <h1 className='text-white flex justify-center'>created with love</h1>
            </div>
        </div>
    )
}
export default Footer
