import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from './../../Provider/AuthProvider';
import signUpLogo from "../../assets/others/authentication2.png";
import bgImg from '../../assets/others/authentication.png'

import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Registration = () => {
    const axiosPublic = useAxiosPublic();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { createUser, logOut, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()





    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('User profile updated');
                        //create user entry in db
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                   
                                    reset();
                                    toast.success("User Created Successfully")
                                   navigate('/')
                                }
                            })

                    })
                    .catch((error) =>{
                        // console.log(error)
                    } );
            })
            .catch((error) => {
                // console.log(error)
            } );
    };




    return (
        <>
            <Helmet>
                <title>Bistro Boss || Register</title>
            </Helmet>
            <div className="hero  min-h-screen " style={{ backgroundImage: `url(${bgImg})` }}>

                <div className="hero-content flex-col md:flex-row-reverse">

                    <div className="text-center  md:w-1/2 lg:text-left">

                            <img src={signUpLogo} alt="" />
                        

                    </div>

                    <div className="card  md:w-1/2  bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body inter-600">

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input {...register("name", { required: true })} name="name" type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 font-semibold">Name is required</span>}

                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>

                                <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600 font-semibold">Photo URL is required is required</span>}

                            </div>


                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input {...register("email")} name="email" type="email" placeholder="Email" className="input input-bordered" required />

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/
                                })} name="password" type="password" placeholder="Password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <p className="text-red-600">Password required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 </p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be One uppercase, one lower case,one number and one special chars</p>}



                            </div>



                            <div className="form-control mt-6">

                                <input className="btn text-white bg-[#D1A054B3]" type="submit" value="Sign In" />
                            </div>

                        </form>
                        <p className="mb-4 text-center inter-500 text-[#D1A054]">Already Have an account ?
                            <Link className="inter-600" to='/login'>Login Here</Link>
                        </p>
                        <p className="inter-500 text-center">Or Sign Up with</p>
                                <div className="text-center mt-2">
                                <SocialLogin></SocialLogin>
                                </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;