import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'

const Root = () => {
    return (
        <section >
            <Navbar />
            <div className='xl:w-[1250px] lg:w-[1000px] md:w-[800px] sm:w-[600px] mx-auto sm:px-0 px-3'>
                <Outlet />
            </div>
            <Footer />
        </section>
    )
}

export default Root