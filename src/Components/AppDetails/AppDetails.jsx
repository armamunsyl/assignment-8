import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, } from "recharts";




const AppDetails = () => {
  const { id } = useParams()
  const appid = parseInt(id)
  const data = useLoaderData();

  if (!Array.isArray(data)) {
    console.error("Data is not array:", data);
    return <p>Error loading data!</p>;
  }

  const finalapp = data.find(appa => appa.id === appid);
  if (!finalapp) {
    return <p>App not found!</p>;
  }
  const { title, downloads, image, ratingAvg, companyName, size, reviews, ratings, description } = finalapp;
  return (
    <div>
      <div className="flex-1 md:flex gap-3 md:gap-6 p-5 ">
        <div className='h-full w-full md:h-60 md:w-60'>
          <img src={image} alt="" />
        </div>
        <div>
          <div className='mt-6 md:mt-0 border-b-1 border-gray-200 pb-4 w-full'>
            <h1 className='text-[#001931] text-xl lg:text-3xl'>{title}</h1>
            <p className='flex items-center text-sm lg:text-xl gap-2  '>Developed by <span className=" flex items-center text-sm lg:text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">{companyName}</span></p>

          </div>
          <div className='flex justify-center items-center gap-6 mt-3 lg:mt-6 mb-5'>
            <div className=' items-center'>
              <h1 className='flex justify-center text-green-700 text-xl lg:text-2xl mb-1'><FaDownload /></h1>
              <p className='text-xs lg:text-sm  flex justify-center mb-0 lg:mb-1 text-center'>Total Download</p>
              <h1 className='text-xl lg:text-2xl font-bold flex justify-center'>{downloads}M</h1>
            </div>
            <div className=' items-center'>
              <h1 className=' flex justify-center text-amber-700 text-xl lg:text-2xl mb-1'><FaStar />
              </h1>
              <p className='text-xs lg:text-sm flex justify-center mb-0 lg:mb-1 text-center'>Average Ratings</p>
              <h1 className='text-xl lg:text-2xl font-bold flex justify-center'>{ratingAvg}M</h1>
            </div>
            <div className=' items-center'>
              <h1 className=' flex justify-center text-xl lg:text-2xl text-purple-500 mb-1'><BiSolidLike />
              </h1>
              <p className='text-sm lg:text-sm flex justify-center mb-0 lg:mb-1 text-center'>Total Reviews</p>
              <h1 className='text-xl lg:text-2xl font-bold flex justify-center'>{reviews}K</h1>
            </div>
          </div>
          <button className="btn btn-active bg-[#00D390] text-white w-full">Install Now ({size} MB)</button>



        </div>

      </div>
      <div>
        <div className='p-5'>
          <div className="mt-10 border-t-1 border-gray-200 border-opacity-3 p-2">
            <h2 className="text-xl font-semibold mb-2">About this App</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-[#001931]">Ratings</h2>

            <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] overflow-x-auto">
              <ResponsiveContainer
                width="100%"
                height="100%"
                minWidth={280}
                minHeight={240}
              >
                <BarChart
                  data={ratings}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 10 }}
                    domain={[0, "auto"]}
                    allowDecimals={false}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={60}
                    tick={{ fontSize: 11 }}
                  />
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
                    isAnimationActive={true}
                    animationDuration={900}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AppDetails