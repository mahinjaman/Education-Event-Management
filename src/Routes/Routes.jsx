import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Event from "../Pages/Event";
import EventDetails from "../Pages/EventDetails";

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
                element: <Blog></Blog>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path:'/services',
                loader: ()=> fetch('services.json'),
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/event',
                element: <Event></Event>
            },
            {
                path:'/event-details/:id',
                loader: ()=> fetch('events.json'),
                element:<EventDetails></EventDetails>
            }
        ]
    }
])

export default router;