import React from 'react'
import { useRef, useState, useEffect } from 'react'
const Passman = () => {
  let ref = useRef()
  let passwordref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])
  const savepassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setpasswordArray([...passwordArray, { ...form, id: form.password }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: form.password }]))
      setform({ site: "", username: "", password: "" })
    }
    else {
      alert("password not saved")
    }
  }
  const deletepassword = (id) => {
    let c = confirm("Do you really want to delete the password")
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
      alert("password delted")
    }
  }
  const editpassword = (id) => {
    setform(passwordArray.filter(i => i.id === id)[0])
    setpasswordArray(passwordArray.filter(item => item.id !== id))
  }
  const showpassword = (params) => {
    if (ref.current.src.includes("eyecross.svg")) {
      ref.current.src = "eye.svg"
      passwordref.current.type = "text"
    }
    else {
      ref.current.src = "eyecross.svg"
      passwordref.current.type = "password"
    }
  }
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const copytext=(text)=>{
    navigator.clipboard.writeText(text)
    alert("copied successfully")
  }

  return (
    <div className='bg-gray-200 px-4 py-4 md:px-20 max-w-screen-xl mx-auto'>
      <div className='logo flex justify-center'>
        <span className='text-green-500 text-2xl font-bold'>&lt;</span><span className='font-bold text-black text-2xl'>pass</span><span className='text-green-500 text-2xl font-bold'>OP/&gt;</span>
      </div>
      <span className='flex justify-center'>Your password manager</span>
      <div className='flex justify-center items-center'>
      <input value={form.site} onChange={handlechange} className="flex justify-center items-center border border-green-500 md:w-[1000px] rounded-full my-3 mx-14 " type="text" name="site" id="" placeholder='enter your url name' />
      </div>
      <div className='mx-4 md:mx-14 flex flex-col md:flex-row gap-4 md:gap-9'>
        <input value={form.username} onChange={handlechange} className="border border-green-500 rounded-full w-full md:w-[700px] my-3" type="text" name="username" id="" placeholder='enter your username' />
        <div className='relative'>
          <input ref={passwordref} value={form.password} onChange={handlechange} className="border border-green-500 rounded-full w-full md:w-[270px] my-3" type="text" name="password" id="password" placeholder='enter your password ' />
          <span className='absolute right-0 top-3 right-3 cursor-pointer' onClick={showpassword}>
            <img ref={ref} src="eye.svg"></img>
          </span>
        </div>
      </div>
      <div className='flex justify-center  mt-4'>
        <button onClick={savepassword} className='rounded-lg bg-green-500 font-bold text-lg text-white my-0'>
          <lord-icon
            src="https://cdn.lordicon.com/gzqofmcx.json"
            trigger="hover">
          </lord-icon>Save</button>
      </div>
      <div className="passwords">
        <h2 className='font-bold text-xl md:text-2xl my-4 text-center'>Your passwords</h2>
        {passwordArray.length === 0 && <div>No passwords yet</div>}
        {passwordArray.length != 0 && 
        <div className='overflow-x-auto mt-4'>
          <table className="table-auto  w-full min-w-[600px]">
          <thead className='bg-green-600'>
            <tr>
              <th>site</th>
              <th>username</th>
              <th>password</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody className='bg-green-300'>
            {passwordArray.map((item, index) => (
              <tr key={index}>
                <td className='text-center'>
                  <div className='flex items-center justify-center'>
                    <span>{item.site}</span>
                    <div className='cursor-pointer'onClick={()=>copytext(item.site)}>
                      <lord-icon
                        src="https://cdn.lordicon.com/xuoapdes.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </div>
                  </div>
                </td>
                <td className='text-center'>
                  <div className='flex items-center justify-center'>
                    <span>{item.username}</span>
                    <div className='cursor-pointer'onClick={()=>{copytext(item.username)}}>
                      <lord-icon
                        src="https://cdn.lordicon.com/xuoapdes.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </div>
                  </div>
                </td>
                <td className='text-center'>
                  <div className='flex items-center justify-center'>
                  <span>{item.password}</span>
                  <div className='cursor-pointer'onClick={()=>{copytext(item.password)}}>
                    <lord-icon
                      src="https://cdn.lordicon.com/xuoapdes.json"
                      trigger="hover"
                      style={{ "width": "25px", "height": "25px" }}>
                    </lord-icon>
                  </div>
                </div></td>
                <td className='flex justify-center items-center'>
                  <span className='editpassword mx-3 pr-2 cursor-pointer' onClick={() => { editpassword(item.id) }}>
                    <lord-icon
                      src="https://cdn.lordicon.com/cbtlerlm.json"
                      trigger="hover"
                      style={{ "width": "25px", "height": "25px" }}>
                    </lord-icon>
                  </span>
                  <span className='deletepassword mx-3 pr-3 cursor-pointer' onClick={() => { deletepassword(item.id) }}>
                    <lord-icon
                      src="https://cdn.lordicon.com/jzinekkv.json"
                      trigger="hover"
                      style={{ "width": "25px", "height": "25px" }}>
                    </lord-icon>
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        </div>}
      </div>
    </div>
  )
}

export default Passman