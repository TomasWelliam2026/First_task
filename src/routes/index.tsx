import { createBrowserRouter } from "react-router";

import RouterLayout from "../layout";
import HomePage from "../pages/user/homePage";
import SignInPage from "../pages/user/signinPage";
import SignUpPage from "../pages/user/signupPage";
import ResetPage from "../pages/user/resetPage";
import AdminHomePage from "../pages/admin/homePage";

const routes = [
    {
        path: '/',
        element: <RouterLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path: '/signin',
        element: <SignInPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/update',
        element: <ResetPage />
    },
    {
        path: '/admin',
        element: <RouterLayout />,
        children: [
            {
                index: true ,
                element: <AdminHomePage />
            }
        ]
    }
];

export const router = createBrowserRouter(routes);
