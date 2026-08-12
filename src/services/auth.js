import { jwtDecode } from "jwt-decode";
import apiService from "./axios";
import { API_BASE_URL } from "../config/config";

class AuthService {
    constructor() {
        this.isRefreshing = false;
        this.failedQueue = [];
        this.accessToken = null; 
    }

    async SignIn(username, password) {
        try {
            console.log("Sign", API_BASE_URL);
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

    async ApiTester() {
        const rlt = await apiService.post(API_BASE_URL + '/api/test', {} );
        return rlt;
    }

    initializeAuth() {
        const token = String(this.getToken());
        if (token) {
            return this.TokenAnalysis(token);
        }
        return null;
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
        if( token === "undefined" || token === null ) return "" ;
        return token ;
    }

    TokenAnalysis(token) {

        try {
            console.log(token)
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

export default authService;