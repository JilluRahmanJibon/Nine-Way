import React from 'react'

const PrimaryButton = ({ children }) => {
    return (
        <button className=' bg-gradient-to-r from-[#632662] to-[#311e56] transition-all hover:bg-gradient-to-l hover:from-[#632662] hover:to-[#311e56]  rounded-md p-2 text-white '>{children}</button>

    )
}

export default PrimaryButton