import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'

const Root = () => {
    return (
        <section >
                <Navbar />
            <div className='w-[1300px] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </section>
    )
}

export default Root