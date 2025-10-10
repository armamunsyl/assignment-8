import React from 'react'
import Banner from '../../Banner/Banner'
import Apps from '../Apps/Apps'
import { useLoaderData } from 'react-router-dom'

function Home() {
  const data = useLoaderData();

  return (
    <div className='bg-[#f8f8f8]'>
        <Banner></Banner>
        <Apps data={data}></Apps>
    </div>
  )
}

export default Home