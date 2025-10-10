import React, { useState, useEffect } from 'react'
import DisplayApp from '../DisplayApp/DisplayApp'
import AppNotFound from '../AppNotFound/AppNotFound'
import Loading from '../Loading/Loading'

const AppsShow = ({ homeapp }) => {
    const [searchText, setSearchText] = useState("")
    const [filteredApps, setFilteredApps] = useState(homeapp)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            const results = homeapp.filter((app) =>
                app.title.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilteredApps(results)
            setLoading(false)
        }, 400) 

        return () => clearTimeout(timer)
    }, [searchText, homeapp])

    return (
        <div className="pt-10 bg-[#f8f8f8] min-h-screen">
            <div>
                <h1 className="flex justify-center text-[#001931] text-2xl md:text-4xl font-bold">
                    Our All Applications
                </h1>
                <p className="flex justify-center text-[#627382] text-sm md:text-xl p-4 text-center">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="flex justify-between items-center mb-2 p-6 lg:p-2">
                <p className="font-semibold text-gray-700 text-sm">
                    ({filteredApps.length}) Apps Found
                </p>
                <input
                    type="text"
                    placeholder="Search Apps..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-40 md:w-60 lg:w-72 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]"
                />
            </div>

            {loading ? (
                <Loading />
            ) : filteredApps.length === 0 ? (
                <div className="text-center text-gray-500 text-lg mt-10">
                    <AppNotFound />
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3 lg:p-2">
                    {filteredApps.map((OneApp) => (
                        <DisplayApp key={OneApp.id} OneApp={OneApp} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AppsShow
