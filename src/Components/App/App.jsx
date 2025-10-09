import React, { use } from 'react'
import { FaStar } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

const App = ({ SingleApp }) => {
    const {title,downloads,image,ratingAvg}=SingleApp;
    
    return (
        <div className=" bg-base-100 shadow-sm p-6 mt-4 ">
            <figure className=''>
                <img className='rounded-xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="mt-5 ">
                <h2 className="card-title text-sm">{title}</h2>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='bg-[#F1F5E8] text-green-700 px-2'>
                  <span className='flex items-center gap-1'><IoMdDownload />{downloads}M</span>
                </div>
                <div className='bg-[#FFF0E1] text-amber-700 px-2'>
                <span className='flex items-center gap-1'><FaStar />{ratingAvg}</span>
                </div>
            </div>
        </div>
    )
}

export default App