import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllJobs from "../pages/AllJobs";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import AcceptedJobs from "../pages/AcceptedJobs";
import DashboardLayout from "../layouts/DashboardLayout";
import DashHome from "../pages/dashboard/DashHome";
import AuthLayout from "../layouts/AuthLayout";


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
                path: 'alljobs',
                Component: AllJobs
            },
            {
                path: 'jobdetails/:id',
                element: <PrivateRoutes>
                    <JobDetails></JobDetails>
                </PrivateRoutes>
            },
            {
                // path: 'addjob',
                // element: <PrivateRoutes>
                //             <AddJob></AddJob>
                //         </PrivateRoutes>
            },
            {
                // path: 'myjobs',
                // element: <PrivateRoutes>
                //             <MyJobs></MyJobs>
                //         </PrivateRoutes>
            },
            {
                path: 'updatejob/:id',
                element: <PrivateRoutes>
                    <UpdateJob></UpdateJob>
                </PrivateRoutes>
            },
            {
                // path: 'acceptedjobs',
                // element: <PrivateRoutes>
                //             <AcceptedJobs></AcceptedJobs>
                //         </PrivateRoutes>
            },
            {
                // path: 'auth/login',
                // Component: Login
            },
            {
                // path: 'auth/register',
                // Component: Register
            },

        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes> <DashboardLayout></DashboardLayout> </PrivateRoutes>,
        children: [
            {
                index: true,
                Component: DashHome
            },
            {
                path: 'addjob',
                Component: AddJob
            },
            {
                path: 'myjobs',
                Component: MyJobs
            },
            {
                path: 'acceptedjobs',
                Component: AcceptedJobs
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])