import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUserContext } from '@/context/user.ctx';
import App from '@/views/home/App.jsx'
import About from '@/views/about/index.jsx'
import Contact from '@/views/contact/index.jsx'
import Signin from "@/views/account/SignIn";
import Signup from "@/views/account/SignUp";
import Account from "@/views/account/Account";
import Error404 from "@/views/includes/errors/Error404";

export const AppRouter = () => {
    const { signin } = useUserContext()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route patch="/home" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={signin ? <Navigate to="/" replace /> : <Signin />} />
                <Route path="/signup" element={signin ? <Navigate to="/" replace/> : <Signup />} />
                <Route path="/account" element={signin ? <Account /> : <Navigate to="/" replace/>} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>

    )
}