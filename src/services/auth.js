import jwtDecode from "jwt-decode";
import apiService from "./axios";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8080/api/auth/";

class AuthService {
    constructor() {
        this.isRefreshing = false;
        this.failedQueue = [];
        this.accessToken = null; 
    }

    async SignIn(username, password) {
        try {
            const response = await apiService.post(
                API_BASE_URL + "/api/auth/signin",
                { username, password }
            );
            
            if (response.data.token) {
                const token = response.data.token;
                return this.TokenAnalysis(token);
            }
        } catch (error) {
            throw error;
        }
    }

    SignOut() {
        this.accessToken = null;
        this.isRefreshing = false;
        this.failedQueue = [];
        localStorage.removeItem("token") ;
    }

    SignUp(username, email, password) {
        return apiService.post(
            API_BASE_URL + "/api/auth/signup",
            { username, email, password, }
        );
    }

    setToken(token) {
        localStorage.setItem("token", token) ;
    }
    getToken() {
        const token = localStorage.getItem("token") ;
        if( !token ) return "" ;
        return token ;
    }

    TokenAnalysis(token) {

        try {
            const decoded = jwtDecode(token);

            const currentTime = Date.now() / 1000;
            if (decoded.exp > currentTime) return false;

            return {
                username: decoded.username,
                email: decoded.email,
                exp: decoded.exp,
                iat: decoded.iat,
            };
        } catch (error) {
            console.error("Token decode error:", error);
            return false;
        }
    }
}

const authService = new AuthService();
authService.configureAxios();

export default authService;