import { useState, useContext } from "react";
// import { useNavigate } from 'react-router';
import AuthContext from "../context";

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const { SignIn } = useContext(AuthContext);
    // const navigate = useNavigate();

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
            await SignIn(formData.email, formData.password);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="SignIn-container">
            <form onSubmit={handleSubmit} className="SignIn-form">
                <h2>SignIn</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        autoComplete={"off"}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "SignIn"}
                </button>
            </form>
        </div>
    );
};

export default SignInPage;