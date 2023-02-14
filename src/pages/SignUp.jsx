import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <>
        <div className='w-full h-screen'>
            <img 
             className='hidden sm:block absolute w-full h-full object-cover'
             src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/9b498ab9-39f3-4a52-9115-d65ab5111a4a/UY-es-20230206-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
             alt="/" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold '>Sign Up</h1>
                        <form className='w-full flex flex-col py-4'>
                            <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='Email' autoComplete='email' />
                            <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder='Password' autoComplete='current-password'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input type="checkbox" className='mr-2' />Remember me</p>
                            <p>Need help?</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>
                                Already subscribed to Netflix?
                            </span>{' '}
                            <Link to='/login'>
                                Sign In
                            </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp