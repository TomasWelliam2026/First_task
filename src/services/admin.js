import { jwtDecode } from "jwt-decode";
import apiService from "./axios";
import { API_BASE_URL } from "../config/config";

class AdminService {
    constructor() {
        this.isRefreshing = false;
        this.failedQueue = [];
        this.accessToken = null; 
    }

    getUsers(page) {
        return apiService.post(
            API_BASE_URL + "/admin/auth/users",
            { page: page }
        );
    }
    deleteUser(id) {
        return apiService.post(
            API_BASE_URL + "/admin/auth/users/delete",
            { id: id }
        );
    }
}

const adminService = new AdminService();

export default adminService;