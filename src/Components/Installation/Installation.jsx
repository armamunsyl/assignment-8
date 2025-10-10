import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa6";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortBy, setSortBy] = useState("downloads");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalled(data);
  }, []);

  const handleUninstall = (id) => {
    const updated = installed.filter((app) => app.id !== id);
    setInstalled(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  const sortedApps = [...installed].sort((a, b) => {
    if (sortBy === "downloads") return b.downloads - a.downloads;
    if (sortBy === "rating") return b.ratingAvg - a.ratingAvg;
    return 0;
  });

  return (
   <div className="bg-[#f9fafb]">
           <div >
          <h1 className="flex justify-center text-[#001931] text-2xl md:text-4xl font-bold pt-4">
            Your Installed Apps</h1>
          <p className='flex justify-center text-[#627382] text-sm md:text-xl p-4 text-center '>Explore All Trending Apps on the Market developed by us</p>

        </div>
     <div className="min-h-screen bg-[#f9fafb] px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-600 text-sm">
            {installed.length} Apps Found
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D390]"
          >
            <option value="downloads">Downloads</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {installed.length === 0 ? (
        <p className="text-center text-gray-500 mt-20 text-lg">
          No apps installed yet.
        </p>
      ) : (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-800 text-lg">
                    {app.title}
                  </h2>
                  <p className="text-sm text-gray-500">{app.companyName}</p>

                  <div className="flex gap-3 mt-1 text-sm text-gray-600">
                    <span className="flex items-center gap-1 text-green-600">
                      <FaDownload /> {app.downloads}M
                    </span>
                    <span className="flex items-center gap-1 text-amber-600">
                      <FaStar /> {app.ratingAvg}
                    </span>
                    <span className="text-gray-500">{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-[#00D390] text-white px-1 md:px-5 py-2 rounded-md hover:bg-[#00b47a] transition-all"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
   </div>
  );
};

export default Installation;
