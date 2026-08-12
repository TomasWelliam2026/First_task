import { createContext, useEffect, useState } from "react";

import AuthService from "../services/auth";

export const AuthContext = createContext({}) ;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const initializeAuth = async () => {
        try {
            const userData = await AuthService.checkAuthStatus();

            if (userData) setUser(userData);

        } catch (error) {
            console.error("Auth initialization error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        initializeAuth();
    }, []);

    const SignIn = async (username, password) => {
        try {
            const userData = await AuthService.SignIn(username, password);
            setUser(userData);
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

    const value = {
        user,
        SignIn,
        SignOut,
        loading,
        isAuthenticated: !!user && !!AuthService.getAccessToken(),
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
