import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
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
            const res = await authService.SignUp(formData.username, formData.email, formData.password);
            if( res.status === 200 ) {
                navigator('/signin');
                toast.success(res.data.msg) ;
                console.log(res) ;
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
                <h2 className="w-full text-3xl font-bold pt-[20px] sm:pt-[40px] md:pt-[60px] pb-4 text-center bg-gray-200">Sign Up</h2>
                <div className="px-[20px] sm:px-[40px] md:px-[60px] pb-[20px] sm:pb-[40px] md:pb-[60px] flex flex-col justify-between items-center text-center w-full ">
                    <div className="form-group flex justify-between items-center w-full my-3 mt-6">
                        <label htmlFor="username">Username:</label>
                        <input
                            className="w-9/12 h-[32px] border border-gray-300 rounded-md py-[8px] px-[14px] focus:outline-none  text-black" placeholder="Enter your username"
                            type="text"
                            id="username"
                            autoComplete={"off"}
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group flex justify-between items-center w-full my-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="w-9/12 h-[32px] border border-gray-300 rounded-md py-[8px] px-[14px] focus:outline-none  text-black" placeholder="Enter your email"
                            type="email"
                            id="email"
                            autoComplete={"off"}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group flex justify-between items-center w-full my-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            className="w-9/12 h-[32px] border border-gray-300 rounded-md py-[8px] px-[14px] focus:outline-none  text-black" placeholder="Enter your password"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="w-full flex justify-between items-center my-4 mb-0">
                        <p className="text-[16px] font-bold tracking-[0px] text-gray-500 cursor-pointer  items-center underline"
                            onClick={() => {
                                navigator('/signin');
                            }}
                        >Sign In ...</p>
                        <button type="submit" className="w-1/2 h-[48px]  bg-gray-800 rounded-lg text-white text-[16px] leading-[24px] text-center px-[32px] py-[12px]" disabled={loading}>
                            {loading ? "Creating account..." : "Sign Up"}
                        </button>
                    </div>
                    <p className="text-[16px] font-bold tracking-[0px] text-gray-400 cursor-pointer mt-[25px]  items-center underline"
                        onClick={() => {
                            navigator('/');
                        }}
                    >Go to home</p>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;