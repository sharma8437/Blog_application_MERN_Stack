import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const { navigate, token } = useAppContext()

  return (
    <div className="flex justify-between items-center py-5 mx-6 sm:mx-12 lg:mx-20 xl:mx-32">
      
      {/* Text Logo */}
      <h1 
        onClick={() => navigate('/')} 
        className="text-2xl sm:text-3xl font-bold text-primary cursor-pointer tracking-wide"
      >
        Blogs <span className="text-gray-800">Duniya</span>
      </h1>

      {/* Button */}
      <button 
        onClick={() => navigate('/admin')} 
        className="flex items-center gap-2 rounded-full text-sm sm:text-base cursor-pointer bg-primary text-white px-6 sm:px-8 lg:px-10 py-2.5 transition-all hover:bg-primary/90"
      >
        {token ? 'Dashboard' : 'Login'}
      </button>
    </div>
  )
}

export default Navbar
