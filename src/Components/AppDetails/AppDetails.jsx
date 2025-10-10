import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FaDownload, FaStar } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import AppNotFound from "../AppNotFound/AppNotFound";

const AppDetails = () => {
  const { id } = useParams();
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    fetch("/AllAppsData.json")
      .then((res) => res.json())
      .then((data) => {
        const appid = parseInt(id);
        const selectedApp = data.find((app) => app.id === appid);
        setAppData(selectedApp || null);
        setLoading(false);
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        const already = installedApps.find((a) => a.id === appid);
        if (already) setIsInstalled(true);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (!appData) return <AppNotFound />;

  const {
    title,
    downloads,
    image,
    ratingAvg,
    companyName,
    size,
    reviews,
    ratings,
    description,
  } = appData;

  // 🔹 Install Handler
  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    installedApps.push(appData);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    setIsInstalled(true);
  };

  return (
    <div>
      <div className="flex-1 md:flex gap-3 md:gap-6 p-5">
        <div className="h-full w-full md:h-60 md:w-60">
          <img src={image} alt={title} />
        </div>
        <div>
          <div className="mt-6 md:mt-0 border-b border-gray-200 pb-4 w-full">
            <h1 className="text-[#001931] text-xl lg:text-3xl">{title}</h1>
            <p className="flex items-center text-sm lg:text-xl gap-2">
              Developed by{" "}
              <span className="font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                {companyName}
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 mt-3 lg:mt-6 mb-5">
            <div className="items-center">
              <h1 className="flex justify-center text-green-700 text-xl lg:text-2xl mb-1">
                <FaDownload />
              </h1>
              <p className="text-xs lg:text-sm flex justify-center text-center">
                Total Download
              </p>
              <h1 className="text-xl lg:text-2xl font-bold flex justify-center">
                {downloads}M
              </h1>
            </div>
            <div className="items-center">
              <h1 className="flex justify-center text-amber-700 text-xl lg:text-2xl mb-1">
                <FaStar />
              </h1>
              <p className="text-xs lg:text-sm flex justify-center text-center">
                Average Ratings
              </p>
              <h1 className="text-xl lg:text-2xl font-bold flex justify-center">
                {ratingAvg}
              </h1>
            </div>
            <div className="items-center">
              <h1 className="flex justify-center text-purple-500 text-xl lg:text-2xl mb-1">
                <BiSolidLike />
              </h1>
              <p className="text-xs lg:text-sm flex justify-center text-center">
                Total Reviews
              </p>
              <h1 className="text-xl lg:text-2xl font-bold flex justify-center">
                {reviews}K
              </h1>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn w-full text-white ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#00b47a]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="mt-10 border-t border-gray-200 p-2">
          <h2 className="text-xl font-semibold mb-2">About this App</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#001931]">Ratings</h2>
          <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] overflow-x-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratings}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis dataKey="name" type="category" width={60} tick={{ fontSize: 11 }} />
                <Tooltip
                  cursor={{ fill: "#f9fafb" }}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#FF8C00"
                  barSize={20}
                  radius={[4, 4, 4, 4]}
                  animationDuration={900}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
