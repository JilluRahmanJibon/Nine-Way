import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = () => {
    return (
        <section>

            <Link>
                <div class="max-w-sm  border border-gray-200 rounded-lg shadow ">
                
                    <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="" />
                     
                    <div class="p-5">
                        
                        <h5 class="mb-2 text-2xl font-bold tracking-tight ">Freelancing & Outsourcing</h5>
                        <p class="mb-3 font-semibold text-xl   "> Course Fee 20,000  </p>
                        
                    </div>
                </div>
            </Link>

        </section>
    )
}

export default CourseCard