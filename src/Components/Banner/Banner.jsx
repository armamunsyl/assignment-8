import React from 'react'
import HeroImg from '../../assets/hero.png'

function Banner() {
    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md mt-3">
                    <h1 className="text-5xl font-bold">We Build</h1>
                    <h1 className="text-5xl font-bold"><span className='text-[#8248eb]'>Productive</span> Apps</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className=''>
                        <button className="btn btn-active bg-white mr-6 text-[#001931]">Googlr Play</button>
                        <button className="btn btn-active bg-white text-[#001931]">App Atore</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img  src={HeroImg} alt="" />
            </div>
        </div>

    )
}

export default Banner