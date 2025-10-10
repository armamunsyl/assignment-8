import React from 'react'
import ErrorImg from '../../../assets/error-404.png'
import { Link } from 'react-router'

function Error() {
  return (
    <div>
      <div className='flex justify-center items-center mt-10 lg:mt-20'>
        <img src={ErrorImg} alt="" />

      </div>
      <div>
        <h1 className="flex justify-center text-[#001931] text-2xl md:text-4xl font-bold ">
          Oops, page not found!</h1>
        <p className='flex justify-center text-[#627382] text-sm md:text-xl p-4 text-center'>The page you are looking for is not available.</p>
        <div className="flex justify-center">
          <Link to='/'>
          <button className="px-4 py-1 rounded-sm flex justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center">
            Go Back</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Error