import React from 'react'
import HeroImg from '../../assets/hero.png'
import PlayStore from '../../assets/imagesplay.png'
import AppStore from '../../assets/images.jpg'
import { Link } from 'react-router'

function Banner() {
    const links = <>
        <Link to='https://play.google.com/store/'><button className="btn btn-active bg-white mr-6 text-[#001931]"><span className='h-6 w-6'><img src={PlayStore} alt="" /></span>Googlr Play</button></Link>
        <Link to='https://www.apple.com/app-store/'><button className="btn btn-active bg-white text-[#001931]"><span className='h-6 w-6'><img src={AppStore} alt="" /></span>App Atore</button></Link>
     
    </>
    return (
        <div>
            <div className=" bg-base-200 min-h-screen mb-0">
                <div className="hero-content text-center">
                    <div className="max-w-xl mt-3">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-7">We Build</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold"><span className='text-[#8248eb]'>Productive</span> Apps</h1>
                        <p className="text-sm lg:text-md  py-6 text-[#627382]">
                            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter,
                            and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className=''>
                            {links}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={HeroImg} alt="" />
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-10 px-4 md:px-10 text-center relative z-0 lg:mt-0">
                    <h1 className="text-white text-2xl md:text-4xl font-bold">
                        Trusted by Millions, Built for You
                    </h1>

                    <div className="flex justify-center gap-4 md:gap-10 mt-0 md:mt-8 text-white">

                        <div className="scale-90 md:scale-100">
                            <p className="text-xs md:text-sm opacity-70">Total Downloads</p>
                            <h1 className="text-3xl md:text-6xl font-bold">29.6M</h1>
                            <p className="text-xs md:text-sm opacity-70">
                                21% more than last month
                            </p>
                        </div>

                        <div className="scale-90 md:scale-100">
                            <p className="text-xs md:text-sm opacity-70">Total Downloads</p>
                            <h1 className="text-3xl md:text-6xl font-bold">906K</h1>
                            <p className="text-xs md:text-sm opacity-70">
                                21% more than last month
                            </p>
                        </div>

                        <div className="scale-90 md:scale-100">
                            <p className="text-xs md:text-sm opacity-70">Total Downloads</p>
                            <h1 className="text-3xl md:text-6xl font-bold">132+</h1>
                            <p className="text-xs md:text-sm opacity-70">
                                21% more than last month
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner