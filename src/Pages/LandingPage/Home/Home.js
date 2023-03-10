import React from 'react'
import Banner from '../Banner/Banner'
import Courses from '../Courses/Courses'
import Department from '../Department/Department'

const Home = () => {
    return (
        <section>
            <Banner />
            <Department />
            <Courses/>
        </section>
    )
}

export default Home