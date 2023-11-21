import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Homelayout from '../components/Layout/Homelayout';
import ShoesStore from '../components/ShoesStore/ShoesStore';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';


export default function Router() {
    const routing = useRoutes([
        {
            path: "/",
            // main is a HomeLayout
            element: <Homelayout />,
            children: [
                {
                    path: "/",
                    element: <ShoesStore />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/signup",
                    element: <Signup />
                }

            ]
        }
    ]);
    return routing;
}
