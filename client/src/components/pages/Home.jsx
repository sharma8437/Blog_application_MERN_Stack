import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import BlogList from '../BlogList'
import Newsletter from '../Newsletter'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <div className=' mt-24 md:mt-52'>

        <BlogList />
        </div>
        <Newsletter />
        <Footer />
    </>
  )
}

export default Home