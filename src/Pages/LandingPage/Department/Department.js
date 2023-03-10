import React from 'react'
import DepartmentCard from './DepartmentCard'
import Outsourcing from '../../../Assests/Department logo/Outsourcing.png'
import web from '../../../Assests/Department logo/web.png'
import graphic from '../../../Assests/Department logo/graphic.png'
import uiUx from '../../../Assests/Department logo/ui-ux.png'
import MotionGraphic from '../../../Assests/Department logo/3d.png'

const Department = () => {

    const departments = [
        {
            id: 1,
            department: "Freelancing & Outsourcing",
            logo: Outsourcing
        },
        {
            id: 2,
            department: "Web Design & Development",
            logo: web
        },
        {
            id: 3,
            department: "Professional Graphic Design",
            logo: graphic
        },
        {
            id: 4,
            department: "UI/ UX Design",
            logo: uiUx
        },
        {
            id: 5,
            department: "3D Animation & Motion Graphics",
            logo: MotionGraphic
        }
    ]

    return (
        <section>
            <div className='flex justify-between mt-8'>
                {
                    departments?.map(department => <DepartmentCard department={department} key={department?.id } />)
                 }
            </div>
        </section>
    )
}

export default Department