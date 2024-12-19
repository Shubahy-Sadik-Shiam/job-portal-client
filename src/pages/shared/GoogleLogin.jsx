import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const GoogleLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    return (
        <div className="flex justify-center mb-4">
            <button onClick={googleLogin} className="btn w-80 bg-white text-black">Sign in with Google</button>
        </div>
    );
};

export default GoogleLogin;