import React from 'react'
import ErrorImg from '../../../assets/error-404.png'

function Error() {
  return (
    <div className='flex justify-center items-center mt-10 lg:mt-20'>
      <img src={ErrorImg} alt="" />
    </div>
  )
}

export default Error