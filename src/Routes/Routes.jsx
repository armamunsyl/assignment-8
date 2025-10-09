import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../Components/Pages/Root/Root';
import Error from '../Components/Pages/Error/Error';
import Home from '../Components/Pages/Home/Home';
import AppHome from '../Components/AppHome/AppHome';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('TrendingApp.json'),
        path: "/",
        element: <Home></Home>

      },
      {
        loader: () => fetch('AllAppsData.json'),
        path: "/apps",
        element: <AppHome></AppHome>
      }
    ]
  },
]);