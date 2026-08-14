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
            console.log(API_BASE_URL, process.env.SERVER_URL) ;
            
            const response = await apiService.post(
                API_BASE_URL + "/api/auth/signin",
                { email: email, password:password }
            );
            if (response.data.code === 200 ) {
                const userData = this.TokenAnalysis(response.data.token);
                return {
                    code: response.data.code,
                    userData: userData,
                    msg: response.data.msg
                } ;
            } else {
                return {
                    code: response.data.code,
                    msg: response.data.msg
                } ;
            }
        } catch (error) {
            throw error;
        }
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

    SignUp(username, email, newPassword, confirmPassword) {
        return apiService.post(
            API_BASE_URL + "/api/auth/signup",
            { username: username, email: email, newPassword: newPassword, confirmPassword: confirmPassword }
        );
    }

    Update(origin, newPassword, confirmPassword) {
        return apiService.post(
            API_BASE_URL + "/api/auth/reset",
            { origin: origin, newPassword: newPassword, confirmPassword: confirmPassword }
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