import { createBrowserRouter } from "react-router-dom";
import App from '@/views/home/App.jsx'
import About from '@/views/about/index.jsx'
import Contact from '@/views/contact/index.jsx'
import Signin from "@/views/account/SignIn";
import Signup from "@/views/account/SignUp";
const router = createBrowserRouter([
    {
        path: "/",
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
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    }
])
export {
    router
}