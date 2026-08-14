import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

import Header from './header';
import Footer from './footer';
import AuthContext from "../context";

export default function RouterLayout() {
    const { user } = useContext(AuthContext) ;

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            {
                user.username === 'admin' ? <></> : <Footer />
            }
        </>
    )
}