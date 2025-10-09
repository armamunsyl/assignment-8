import React, { useState } from 'react'
import DisplayApp from '../DisplayApp/DisplayApp'
import AppNotFound from '../AppNotFound/AppNotFound';

const AppsShow = ({ homeapp }) => {
    const [searchText, setSearchText] = useState("");
    const filteredApps = homeapp.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    );
    // console.log(homeapp)
    return (
        <div className='mt-8 '>
            <div>
                <h1 className="flex justify-center text-[#001931] text-2xl md:text-4xl font-bold">
                    Our All Applications
                </h1>
                <p className='flex justify-center text-[#627382] text-sm md:text-xl p-4 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            </div>
            <div className="flex justify-between items-center mb-6">
                <p className="font-semibold text-gray-700">
                    ({filteredApps.length}) Apps Found
                </p>
                <input
                    type="text"
                    placeholder=" Search Apps"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]"
                />
            </div>
            {filteredApps.length === 0 ? (
                <p className="text-center text-gray-500 text-lg mt-10">
                   <AppNotFound></AppNotFound>
                </p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {filteredApps.map((OneApp) => (
                        <DisplayApp key={OneApp.id} OneApp={OneApp} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AppsShow