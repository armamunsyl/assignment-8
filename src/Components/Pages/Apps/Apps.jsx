import React, { Suspense } from 'react'
import App from '../../App/App'



const Apps = ({ data }) => {
    return (
        <div className='mt-8 '>
            <div>
                <h1 className="flex justify-center text-[#001931] text-2xl md:text-4xl font-bold">
                    Trending Apps
                </h1>
                <p className='flex justify-center text-[#627382] text-sm md:text-xl p-4 text-center'>Explore All Trending Apps on the Market developed by us</p>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 mb-10 mt-5 p-4 lg:p-0'>
                <Suspense>
                    {
                        data.map((SingleApp) => <App key={SingleApp.id} SingleApp={SingleApp}></App>)
                    }
                </Suspense>
            </div>
        </div>
    )
}

export default Apps