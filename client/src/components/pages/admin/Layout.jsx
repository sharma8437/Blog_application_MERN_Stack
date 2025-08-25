import React from 'react'
import { assets } from '../../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../admin/Sidebar'
import { useAppContext } from '../../../context/AppContext'

const Layout = () => {

    // const navigate = useNavigate()
    const {axios, setToken, navigate } = useAppContext()

    const logout = ()=>{
        // navigate('/')
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null);
        navigate('/')

    }
  return (
    <>
    <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        {/* <img src={assets.logo} alt='' className='w-32 sm:w-40 cursor-pointer' onClick={()=>navigate('/') } /> */}
         <h1 
        onClick={() => navigate('/')} 
        className="text-2xl sm:text-3xl font-bold text-primary cursor-pointer tracking-wide"
      >
        Blogs <span className="text-gray-800">Duniya</span>
      </h1>

        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
    </div>

    <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar />
        <Outlet />


    </div>
    </>
  )
}

export default Layout