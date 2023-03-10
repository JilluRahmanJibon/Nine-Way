import React from 'react'

const DepartmentCard = ({ department }) => {
    return (
        <section className='relative w-[220px] '>
            <div className='border-2 border-primary text-center font-bold hover:bg-[#351f57] hover:text-white duration-200 ease-in-out h-full p-8 rounded-lg'>
                <h1> {department?.department}</h1>
            </div>
            <div className='border-2 flex justify-center items-center border-primary bg-white h-[60px] w-[60px] rounded-full absolute left-[37%] -top-8'>
                <img src={department?.logo} alt="" />
            </div>
        </section>
    )
}

export default DepartmentCard