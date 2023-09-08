import { BrowserRouter, createBrowserRouter, Navigate, Route, Routes, RouterProvider} from "react-router-dom";

import App from '@/views/home/App.jsx'
import About from '@/views/about/index.jsx'
import Contact from '@/views/contact/index.jsx'
import Signin from "@/views/account/SignIn";
import Signup from "@/views/account/SignUp";
import Account from "../views/account/Account";
import Error404 from "../views/includes/errors/Error404";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/home",
        element: <App />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/signin",
        element: !localStorage.getItem('token') ? <Signin /> : <Navigate to="/" />
    },
    {
        path: "/signup",
        element: !localStorage.getItem('token') ? <Signup /> : <Navigate to="/" /> 
    },
    {
        path: "/account",
        element: localStorage.getItem('token') ? <Account /> : <Navigate to="/" /> 
    },
    {
        path: "*",
        element: <Error404 />
    },
])
export const Router = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
