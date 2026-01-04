import React, { use, useState } from 'react';
import destop from '../assets/desktop2.jpg'
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';


const Login = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const { logInUser, googleLogin } = use(AuthContext);

    const [passToggle, setPassToggle] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const DEMO_USER = {
        email: "tata@gmail.com",
        password: "Tata@1"
    };

    //password toggle function
    const handleToggle = (e) => {
        e.preventDefault();
        setPassToggle(!passToggle);
    }

    const handleLogin = data => {

        // const form = e.target;
        const email = data.email;
        const password = data.password;

        // console.log(email, password)

        logInUser(email, password)
            .then(result => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${result.user.displayName}, Log In Successful !`,
                    showConfirmButton: false,
                    timer: 1000
                });

                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                // console.log(error)
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        googleLogin()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log in successful!",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/');
            })
    }

    // function for autofill user credentials
    const handleDemoUserLogin = (e) => {
        e.preventDefault()
        // auto-fill inputs
        setValue("email", DEMO_USER.email);
        setValue("password", DEMO_USER.password);

        // login immediately
        // logInUser(DEMO_USER.email, DEMO_USER.password)
        //     .then(result => {
        //         toast.success("Demo user login successful");
        //         navigate(location.state ? location.state : "/");
        //     })
        //     .catch(error => {
        //         toast.error(error.message);
        //         console.error(error);
        //     });
    };

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center">
            <div className="max-md:order-1 md:min-h-screen w-full h-full">
                <img src={destop} className="w-full h-full object-cover" alt="signup-image" />
            </div>

            <div className="lg:col-span-2 w-full p-8 max-w-lg mx-auto">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-8">
                        <h1 className="text-info text-2xl font-bold">Login Now</h1>
                    </div>

                    <div className="space-y-3">

                        {/* email field */}
                        <div>
                            <label className="text-info text-sm font-medium mb-2 block">Email</label>
                            <div className="relative flex items-center">
                                <input type="email" {...register('email', { required: true })} className="text-slate-900 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                    </g>
                                </svg>
                            </div>
                            {
                                errors.email?.type === 'required' &&
                                <p className='text-red-500 text-xs mt-1'>Email is required</p>
                            }
                        </div>

                        {/* password field */}
                        <div>
                            <label className="text-info text-sm font-medium mb-2 block">Password</label>
                            <div className="relative flex items-center">

                                <input {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/
                                })} type={passToggle ? "text" : "password"}
                                    className="text-slate-900 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />

                                <button onClick={handleToggle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 top-4 cursor-pointer" viewBox="0 0 128 128">
                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                    </svg>
                                </button>

                            </div>
                            {
                                errors.password?.type === 'required' &&
                                <p className='text-red-500 text-xs mt-1'>Password is required</p>
                            }
                            {
                                errors.password?.type === 'minLength' &&
                                <p className='text-red-500 text-xs mt-1'>Password must be 6 character or longer</p>
                            }
                            {
                                errors.password?.type === 'pattern' &&
                                <p className='text-red-500 text-xs mt-1'>Password must contain minimum one uppercase, one lower case, one number and one special characterr</p>
                            }
                        </div>

                        <div className="flex items-center">
                            <label className="block text-sm text-slate-600">
                                <a href="javascript:void(0);" className="text-blue-600 font-medium hover:underline">Forgot Password</a>
                            </label>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3">
                        {/* login button */}
                        <button className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none cursor-pointer">
                            Log In
                        </button>

                        <span className='text-center'>OR</span>

                        {/* google button */}
                        <button onClick={handleGoogleLogin} className='btn btn-outline border-primary text-primary btn-success w-full'><FcGoogle size={20} /> Login with Google</button>

                        <button onClick={handleDemoUserLogin} className='btn btn-outline border-secondary btn-success w-full'>Fill User Credentials</button>
                    </div>
                    <p className="text-slate-600 text-sm mt-6 text-center">New to our site? <Link to='/auth/register' className="text-blue-600 font-medium hover:underline ml-1">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;