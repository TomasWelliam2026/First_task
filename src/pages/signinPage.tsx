import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router';
import AuthContext from "../context";
import { toast } from "react-toastify";

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const { SignIn } = useContext(AuthContext);
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
            const res:any = await SignIn(formData.email, formData.password);
            if( res.code === 200 ) {
                toast.success(`"${res.userData.username}" signed in`) ;
                navigator('/') ;
            } else {
                toast.error(res.msg) ;
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
                <h2 className="w-full text-3xl font-bold pt-[20px] sm:pt-[40px] md:pt-[60px] pb-4 text-center bg-gray-200">Sign In</h2>
                <div className="px-[20px] sm:px-[40px] md:px-[60px] pb-[20px] sm:pb-[40px] md:pb-[60px] flex flex-col justify-between items-center text-center w-full ">
                    <div className="form-group flex justify-between items-center w-full my-3 mt-6">
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
                    <div className="w-full h-full flex justify-center items-center my-4">
                        <div className="w-full flex justify-center">
                            <p className="text-[16px] tracking-[0px] text-gray-500 flex items-center">No account?</p>
                            <p className="text-[16px] font-bold tracking-[0px] text-gray-500 cursor-pointer ml-[20px]  items-center underline"
                                onClick={() => {
                                    navigator('/signup');
                                }}
                            >Create one!</p>
                        </div>
                    </div>
                    <button type="submit" className="w-1/2 h-[48px]  bg-gray-800 rounded-lg text-white text-[16px] leading-[24px] text-center px-[32px] py-[12px] " disabled={loading}>
                        {loading ? "Logging in..." : "Sign In"}
                    </button>
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

export default SignInPage;