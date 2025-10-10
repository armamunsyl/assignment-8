import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Root from '../Components/Pages/Root/Root';
import Error from '../Components/Pages/Error/Error';
import Home from '../Components/Pages/Home/Home';
import AppHome from '../Components/AppHome/AppHome';
import AppDetails from '../Components/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('/TrendingApp.json').then(res => res.json()),
        element: <Home></Home>

      },
      {
        loader: () => fetch('/AllAppsData.json').then(res => res.json()),
        path: "apps",
        element: <AppHome></AppHome>
      },
      {
        path: "appinfo/:id",
        loader: () => fetch('/AllAppsData.json').then(res => res.json()),
        element: <AppDetails></AppDetails>
      }
    ]
  },
]);