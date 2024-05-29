import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Login = () => {
    const {login} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'; 
    // console.log('state from the location', location.state)

   
    const [disabled, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

       login(email, password)
       .then(result => {
        const user = result.user;
        // console.log(user);
        Swal.fire({
            title: "User login successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, {replace: true});
       })
    }



    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
     if(validateCaptcha(user_captcha_value)){
        setDisable(false);
     }else{
        setDisable(true);
        toast.error("Captcha did not match");
     }
     }

     
     

    return (
        <div  className="hero  min-h-screen bg-base-200">

            <div className="hero-content flex-col md:flex-row-reverse">

                <div className="text-center  md:w-1/2 lg:text-left">

                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>

                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>

                            <input onBlur={handleValidateCaptcha} 
                              name="captcha" type="text" placeholder="Type Captcha Above" className="input input-bordered" required />



                        </div>

                        <div className="form-control mt-6">

                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>

                    </form>
                    <p className="mb-4 text-center">New here?  <Link  to='/registration'> Create An Account</Link></p>
                    <div className='text-center'>
                    <SocialLogin ></SocialLogin>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;