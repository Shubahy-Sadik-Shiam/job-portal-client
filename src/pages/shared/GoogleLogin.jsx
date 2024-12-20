import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res=>{
            console.log(res);
            navigate(location.state ? location.state : "/");

        }).catch(error=>console.log(error))
    }
    return (
        <div className="flex justify-center mb-4">
            <button onClick={handleGoogleLogin} className="btn w-80 bg-white text-black">Sign in with Google</button>
        </div>
    );
};

export default GoogleLogin; 