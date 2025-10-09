import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../Components/Pages/Root/Root';
import Error from '../Components/Pages/Error/Error';
import Home from '../Components/Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
        {
            index: true,
            loader:()=> fetch('TrendingApp.json'),
            path: "/",
            Component: Home
        }
    ]
  },
]);