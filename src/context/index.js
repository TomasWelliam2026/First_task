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
            const res = await AuthService.SignIn(email, password);
            if( res.code === 200 ) {
                setUser(res.userData);
                setLogin(true) ;
            }
            return res ;
        } catch (error) {
            throw error;
        }
    };
    
    const SignOut = async () => {
        try {
            await AuthService.SignOut() ;
            setLogin(false) ;
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