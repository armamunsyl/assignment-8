import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const AppDetails = () => {
    const {id}= useParams()
    const appid = parseInt(id)
    const data= useLoaderData();
    const finalapp = data.find(appa => appa.id===appid)
    console.log(finalapp)
    const {title,downloads,image,ratingAvg} = finalapp;
  return (
    <div>{title}</div>
  )
}

export default AppDetails