import { jwtDecode } from "jwt-decode";
import apiService from "./axios";
import { API_BASE_URL } from "../config/config";

class AuthService {
    constructor() {
        this.isRefreshing = false;
        this.failedQueue = [];
        this.accessToken = null; 
    }

    async SignIn(email, password) {
        try {
            const response = await apiService.post(
                API_BASE_URL + "/api/auth/signin",
                { email: email, password:password }
            );
            
            if (response.data.token) {
                const token = response.data.token;
                return this.TokenAnalysis(token);
            } else {
                return "" ;
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
            { username: username, email: email, password: password, }
        );
    }

    setToken(token) {
        console.log(token)
        localStorage.setItem("token", token) ;
    }

    getToken() {
        const token = localStorage.getItem("token") ;
        if( token === "undefined" || token === null ) return "" ;
        return token ;
    }

    TokenAnalysis(token) {

        try {
            const decoded = jwtDecode(token);

            return {
                username: decoded.username,
                email: decoded.email,
            };
        } catch (error) {
            console.error("Token decode error:", error);
            return false;
        }
    }
}

const authService = new AuthService();

export default authService;