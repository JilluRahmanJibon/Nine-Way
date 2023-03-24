import React, { useState } from 'react'
import { IoMdMail } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';
import logo from '../../Assests/Logo/9way.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuIntems = <React.Fragment>
        <li>
            <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
                Product
            </a>
        </li>
        <li>
            <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
                Features
            </a>
        </li>
        <li>
            <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
                Pricing
            </a>
        </li>
        <li>
            <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
                About us
            </a>
        </li>
        <li>

            <Link to={``} class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-[10px] overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#632662] rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-36 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#632662] group-hover:-rotate-180 ease"></span>
                    <span class="relative">Login</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-11 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#632662] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </Link>
        </li>
    </React.Fragment>

    return (
        <section>
            <div className='bg-gradient-to-r from-[#632662] to-[#311e56] text-white'>
                <div className='xl:w-[1250px] lg:w-[1000px] py-2 md:w-[800px] sm:w-[600px] mx-auto sm:px-0 px-3 flex gap-5 '>
                    <div>
                        <a href="tel:01674931378" className='flex gap-2 '><BsTelephoneFill className='mt-1' /> 01674931378</a>
                    </div>
                    <div>
                        <a href="mailto:afia.nasrin3e@gmail.com " className='flex gap-2 '><IoMdMail className='mt-1' /> afia.nasrin3e@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className='xl:w-[1250px] lg:w-[1000px] py-1 md:w-[800px] sm:w-[600px] mx-auto sm:px-0 px-3'>
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="9Way"
                        title="9Way"
                        class="inline-flex items-center"
                    >
                        <img className='w-40' src={logo} alt="9Way" />
                    </a>
                    <ul class=" items-center hidden space-x-8 lg:flex">
                        {menuIntems}
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="9Way"
                                                title="9Way"
                                                class="inline-flex items-center"
                                            >
                                                <img className='w-32' src={logo} alt="9Way" />

                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            {menuIntems}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar