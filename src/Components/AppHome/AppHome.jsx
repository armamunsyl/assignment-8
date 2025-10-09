import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AppsShow from '../AppsShow/AppsShow'

const AppHome = () => {
  const homeapp = useLoaderData()
  
//   console.log(homeapp)
  
  return (
    <div>
        <AppsShow homeapp={homeapp}></AppsShow>
    </div>
  )
}

export default AppHome
