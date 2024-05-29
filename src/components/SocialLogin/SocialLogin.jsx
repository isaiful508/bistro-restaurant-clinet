import { FaGoogle } from "react-icons/fa";
import UseAuth from './../../hooks/UseAuth';
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()



    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) =>{
            // console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
           axiosPublic.post('/users', userInfo)
           .then((res) =>{
            // console.log(res.data)
            navigate('/')
           })
        })

    }
    return (
        <div>
            <button onClick={handleGoogleLogin}
                className="btn">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;