import React from 'react'
import HeroImg from '../../assets/hero.png'
import PlayStore from '../../assets/imagesplay.png'
import AppStore from '../../assets/images.jpg'

function Banner() {
    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-xl mt-3">
                    <h1 className="text-6xl font-bold mt-7">We Build</h1>
                    <h1 className="text-6xl font-bold"><span className='text-[#8248eb]'>Productive</span> Apps</h1>
                    <p className="py-6 text-[#627382]">
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter,
                         and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className=''>
                        <button className="btn btn-active bg-white mr-6 text-[#001931]"><span className='h-6 w-6'><img src={PlayStore} alt="" /></span>Googlr Play</button>
                        <button className="btn btn-active bg-white text-[#001931]"><span className='h-6 w-6'><img src={AppStore} alt="" /></span>App Atore</button>
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