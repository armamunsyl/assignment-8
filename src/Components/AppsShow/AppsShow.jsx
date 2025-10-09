import React from 'react'
import DisplayApp from '../DisplayApp/DisplayApp'

const AppsShow = ({homeapp}) => {
    // console.log(homeapp)
  return (
            <div className='mt-8 '>
            <div>
                <h1 className="flex justify-center text-[#001931] text-2xl md:text-4xl font-bold">
                    Our All Applications
                </h1>
                <p className='flex justify-center text-[#627382] text-sm md:text-xl p-4 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 mb-10 mt-5 p-4 lg:p-0'>
                {
                    homeapp.map((OneApp) => <DisplayApp key={OneApp.id} OneApp={OneApp}></DisplayApp>)
                }
            </div>
        </div>
  )
}

export default AppsShow