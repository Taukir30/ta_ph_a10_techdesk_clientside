import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllJobs from "../pages/AllJobs";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import JobDetails from "../pages/JobDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/alljobs',
                Component: AllJobs
            },
            {
                path: '/jobdetails/:id',
                element: <PrivateRoutes>
                            <JobDetails></JobDetails>
                        </PrivateRoutes>
            },
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])