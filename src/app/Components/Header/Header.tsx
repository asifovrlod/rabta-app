import React from 'react'
import Logo from '../../../assets/media/logo.png'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='py-5'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <nav className='relative z-50 flex justify-between'>
                    <div className='flex items-center md:gap-x-12'>
                        <a href="/">
                            {/* <Image src={Logo} alt="Rabta Logo" width={150} height={75} /> */}
                        </a>
                        <div className='hidden md:flex md:gap-x-6'>
                            <a href="/" className='font-semibold text-gray-900 hover:text-gray-700'>Feature</a>
                            <a href="/" className='font-semibold text-gray-900 hover:text-gray-700'>Testimonials</a>
                            <a href="/" className='font-semibold text-gray-900 hover:text-gray-700'>Pricing</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <a href="" className="inline-block font-semibold rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">Sign in</a>
                        </div>
                        <a href="" className='group inline-flex items-center justify-center rounded-full py-2 px-4 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'>Get started today</a>
                        <a href="" className="inline-block font-semibold text-lg rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">اردو</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header