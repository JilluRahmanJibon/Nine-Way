import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <section>
            <div className='xl:w-[1250px] lg:w-[1000px] md:w-[800px] sm:w-[600px] mx-auto sm:px-0 px-3'>
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <h1 className="text-base font-bold tracking-wide text-gray-900 pb-3">Office Address</h1>
                            <div>
                                <ul className='font-medium'>
                                    <li>Level-4, 34, Awal Centre, Banani, Dhaka</li>
                                    <li><span className='font-bold'>Support: </span> <a href="mailto:afia.nasrin3e@gmail.com">afia.nasrin3e@gmail.com</a></li>
                                    <li><span className='font-bold'>HelpLine: </span> <a href="tel:01674931378">+880-1674931378</a></li>
                                    <li>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <h1 className="text-base font-bold tracking-wide text-gray-900 pb-3">
                                Useful Links
                            </h1>
                            <div className="flex">
                                <p className="mr-1 text-gray-800">Phone:</p>
                                <a
                                    href="tel:850-123-5021"
                                    aria-label="Our phone"
                                    title="Our phone"
                                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    850-123-5021
                                </a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 text-gray-800">Email:</p>
                                <a
                                    href="mailto:info@lorem.mail"
                                    aria-label="Our email"
                                    title="Our email"
                                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    info@lorem.mail
                                </a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 text-gray-800">Address:</p>
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Our address"
                                    title="Our address"
                                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    312 Lovely Street, NY
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-base font-bold tracking-wide text-gray-900 pb-3">
                                Follow Us
                            </h2>
                            <div className="flex items-center mt-1 space-x-3">
                                <a
                                    href="/"
                                    className="text-gray-500 text-2xl hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                                >
                                     <FaFacebook/>
                                </a>
                                <a
                                    href="/"
                                    className="text-gray-500 text-2xl hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                                >
                                     <FaInstagram/>
                                </a>
                                <a
                                    href="/"
                                    className="text-gray-500 text-2xl hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                                >
                                     <FaLinkedin/>
                                </a>
                                <a
                                    href="/"
                                    className="text-gray-500 text-2xl hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                                >
                                     <FaYoutube/>
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                               
                            </p>
                        </div>
                    </div>
                    <div className="text-center pt-2 border-t border-primary border-opacity-20 pb-8">
                        <p className="text-sm  text-gray-600">
                            ©Nine Way 2023.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer