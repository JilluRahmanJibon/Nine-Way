import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
    const courses = [
        {}, {}, {}, {}, {}, {}
    ]
    return (
        <section className='mt-12 mb-8'>
            <div className='text-center'>
                <h1 className='text-primary font-bold xl:text-4xl md:text-3xl '>Our Popular Courses</h1>
                <p className='font-lg pt-2 text-gray-500'>
                    দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব দিয়েই <br /> সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার সুবিধামত অনলাইন <br /> বা অফলাইন কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
                </p>
           </div>

            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-8'> 
                {courses?.map(course=><CourseCard/>)}
            </div>
        </section>
    )
}

export default Courses