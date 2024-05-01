import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path: '/blog',
                loader: ()=> fetch('blog.json'),
                element: <Blog></Blog>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;