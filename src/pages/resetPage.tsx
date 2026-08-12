import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";

import authService from "../services/auth";

const ResetPage = () => {
    const [formData, setFormData] = useState({
        origin: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);

    const navigator = useNavigate();

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res:any = await authService.Update( formData.origin, formData.newPassword, formData.confirmPassword );
            if( res.data.code === 200 ) {
                toast.success(res.data.msg) ;
                navigator('/signin') ;
            } else {
                toast.error(res.data.msg) ;
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-[450px] sm:h-[600px] md:h-[750px] flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[300px] sm:w-[400px] md:w-[500px] flex flex-col justify-between items-center border rounded-md shadow-md">
                <h2 className="w-full text-3xl font-bold pt-[20px] sm:pt-[40px] md:pt-[60px] pb-4 text-center bg-gray-200">Password Reset</h2>
                <div className="px-[20px] sm:px-[40px] md:px-[60px] pb-[20px] sm:pb-[40px] md:pb-[60px] flex flex-col justify-between items-center text-center w-full ">
                    <div className="form-group flex justify-between items-center w-full my-3 mt-6">
                        <label htmlFor="email">Origin Password</label>
                        <input
                            className="w-7/12 h-[32px] border border-gray-300 rounded-md py-[8px] px-[14px] focus:outline-none text-sm  text-black" placeholder="Enter current password"
                            type="password"
                            id="origin"
                            autoComplete={"off"}
                            name="origin"
                            value={formData.origin}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group flex justify-between items-center w-full my-3">
                        <label htmlFor="password">New Password:</label>
                        <input
                            className="w-7/12 h-[32px] border border-gray-300 rounded-md py-[8px] px-[14px] focus:outline-none text-sm text-black" placeholder="Enter your new password"
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group flex justify-between items-center w-full my-3">
                        <label htmlFor="password">Confirm Password:</label>
                        <input
                            className="w-7/12 h-[32px] border border-gray-300 rounded-md py-[8px] px-[14px] focus:outline-none text-sm  text-black" placeholder="Enter confirm password"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="w-full h-full flex justify-between items-center my-4 mb-0">
                        <button type="submit" className="w-1/3 h-[48px]  bg-gray-800 rounded-lg text-white text-[16px] leading-[24px] text-center px-[32px] py-[12px] " disabled={loading}>
                            {loading ? "Logging in..." : "Update"}
                        </button>
                        <button className="w-1/3 h-[48px]  bg-gray-800 rounded-lg text-white text-[16px] leading-[24px] text-center px-[32px] py-[12px] " disabled={loading}
                            onClick={() => {
                                navigator('/')
                            }}
                        >
                            {loading ? "Logging in..." : "Cancel"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ResetPage;