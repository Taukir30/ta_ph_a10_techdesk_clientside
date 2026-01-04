import React, { use, useState } from 'react';
import laptopImg from '../assets/laptop.jpg'
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Register = () => {

    const { createUser, setUser, updateUser, googleLogin } = use(AuthContext);

    const [passToggle, setPassToggle] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    //password toggle function
    const handleToggle = (e) => {
        e.preventDefault();
        setPassToggle(!passToggle);
    }

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        setError('');                                               //clearing error

        const passRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;          //regular expression for password text

        if (!passRegEx.test(password)) {                            //verifying password pattern
            setError('Password must contain at least one uppercase, one lowercase and minimum 6 characters !');
            return;
        }

        createUser(email, password)
            .then(result => {
                form.reset()
                setUser(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });

                //update username and photo
                const userProfile = { displayName: name, photoURL: photoUrl };

                updateUser(result.user, userProfile).then().catch();

                navigate(`${location.state ? location.state : "/"}`);

            })
            .catch(error => {
                console.log(error);
                toast(error);
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

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center ">
            <div className="max-md:order-1 md:min-h-screen w-full h-full">
                <img src={laptopImg} className="w-full h-full object-cover" alt="signup-image" />
            </div>

            <div className="lg:col-span-2 w-full p-8 max-w-lg mx-auto">
                <form onSubmit={handleRegister}>
                    <div className="mb-8">
                        <h1 className="text-info text-2xl font-bold">Register Now</h1>
                    </div>

                    <div className="space-y-6">

                        {/* name -------------------------- */}
                        <div>
                            <label className="text-info text-sm font-medium mb-2 block">Name</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="text-info bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24"> <circle cx="10" cy="7" r="6" data-original="#000000"></circle> <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path> </svg>
                            </div>
                        </div>

                        {/* email------------------------ */}
                        <div>
                            <label className="text-info text-sm font-medium mb-2 block">Email</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="text-info bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667"> <defs> <clipPath id="a" clipPathUnits="userSpaceOnUse"> <path d="M0 512h512V0H0Z" data-original="#000000"></path> </clipPath> </defs> <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)"> <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path> <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path> </g>  </svg>
                            </div>
                        </div>

                        {/* Photo------------------------ */}
                        <div>
                            <label className="text-info text-sm font-medium mb-2 block">Photo URL</label>
                            <div className="relative flex items-center">
                                <input name="photoUrl" type="text" required className="text-info bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24"> <circle cx="10" cy="7" r="6" data-original="#000000"></circle> <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path> </svg>
                            </div>
                        </div>

                        {/* password------------------------------------- */}
                        <div>
                            <label className="text-info text-sm font-medium mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type={passToggle ? "text" : "password"} required className="text-info bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
                                <button onClick={handleToggle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 top-3 cursor-pointer" viewBox="0 0 128 128"> <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>  </svg>
                                </button>
                            </div>
                        </div>

                        {/* showing password waring on dom */}
                        {
                            error && <p className='text-xs text-red-500'>{error}</p>
                        }

                        {/* terms----------------------------------------- */}
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label className="ml-3 block text-sm text-slate-600">
                                I accept the <Link href="javascript:void(0);" className="text-blue-600 font-medium hover:underline ml-1">Terms and Conditions</Link>
                            </label>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3">

                        {/* register button */}
                        <button className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none cursor-pointer">
                            Create an account
                        </button>

                        <span className='text-center'>OR</span>

                        {/* google button */}
                        <button onClick={handleGoogleLogin} className='btn btn-outline border-primary text-primary btn-success w-full'><FcGoogle size={20} /> Login with Google</button>

                    </div>
                    <p className="text-slate-600 text-sm mt-6 text-center">Already have an account? <Link to='/auth/login' className="text-blue-600 font-medium hover:underline ml-1">Login here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;