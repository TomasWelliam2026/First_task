import { createContext, useEffect, useState } from "react";

import AuthService from "../services/auth";

const AuthContext = createContext() ;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [login, setLogin] = useState(false) ;
    const [loading, setLoading] = useState(true);

    const initializeAuth = async () => {
        try {
            const userData = await AuthService.initializeAuth();

            if (userData) setUser(userData);

        } catch (error) {
            console.error("Auth initialization error:", error);
        } finally {
            setLoading(false);
        }
    };

    const SignIn = async (email, password) => {
        try {
            const userData = await AuthService.SignIn(email, password);
            setUser(userData);
            setLogin(true) ;

            return userData;
        } catch (error) {
            throw error;
        }
    };
    
    const SignOut = async () => {
        try {
            await AuthService.SignOut() ;
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            setUser({});
        }
    };

    useEffect(() => {
        initializeAuth();
    }, []);

    useEffect(() => {

    }, [login]) ;

    const value = {
        user,
        login,
        SignIn,
        SignOut,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext ;