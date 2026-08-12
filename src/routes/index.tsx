import { createBrowserRouter } from "react-router";

import RouterLayout from "../layout";
import HomePage from "../pages/homePage";
import SignInPage from "../pages/signinPage";
import SignUpPage from "../pages/signupPage";
import ResetPage from "../pages/resetPage";

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
