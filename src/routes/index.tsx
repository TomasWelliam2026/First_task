import { createBrowserRouter } from "react-router";

import RouterLayout from "../layout";
import HomePage from "../pages/user/homePage";
import SignInPage from "../pages/user/signinPage";
import SignUpPage from "../pages/user/signupPage";
import ResetPage from "../pages/user/resetPage";

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
    }
];

export const router = createBrowserRouter(routes);
