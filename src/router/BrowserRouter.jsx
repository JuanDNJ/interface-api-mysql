import { createBrowserRouter } from "react-router-dom";
import App from '@/views/home/App.jsx'
import About from '@/views/about/index.jsx'
import Contact from '@/views/contact/index.jsx'
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
    }
])
export {
    router
}