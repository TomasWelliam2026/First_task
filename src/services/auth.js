import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api/auth/";

class AuthService {
    constructor() {
        this.isRefreshing = false;
        this.failedQueue = [];
        this.accessToken = null; 
    }

    async SignIn(username, password) {
        try {
            const response = await axios.post(
                API_URL + "/api/auth/signin",
                { username, password }
            );
            
            if (response.data.token) {
                const token = response.data.token;
                localStorage.setItem("token", token) ;
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

        return axios
            .post(API_URL + "/api/auth/SignOut")
            .catch((error) => {
                console.error("SignOut error:", error);
            });
    }

    SignUp(username, email, password) {
        return axios.post(
            API_URL + "/api/auth/signup",
            { username, email, password, }
        );
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

    async checkAuthStatus() {
        try {
            const token = localStorage.getItem("token") ;
        } catch (error) {
        }
    }

}

const authService = new AuthService();
authService.configureAxios();

export default authService;