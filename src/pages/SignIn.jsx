import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Router/AuthProvider';
import googleLogo from '../assets/google-icon.png'
import toast from 'react-hot-toast';

const SignIn = () => {
    const { handleLogInEmail, handleLogInWithGoogle, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const nevigate = useNavigate();
    const location = useLocation();

    const handlesignInBtn = (evetn) => {
        evetn.preventDefault();
        const email = evetn.target.email.value;
        const password = evetn.target.password.value;
        setError("");

        handleLogInEmail(email, password)
        .then((result) => {
            setUser(result.user);
            toast.success("You have successfully Login!");
            nevigate(location?.state ? location.state : "/");
        })
        .catch((err) => {
            setError(err.message);
        })
    }

    const handleSignInGoogle = () =>{
        handleLogInWithGoogle()
        .then(res => {
            toast.success("You have successfully Login!")
            nevigate(location?.state ? location.state : "/");
        })
        .catch((err) => {
            setError(err.message);
        })
    }

    return (
        <div className='flex flex-col items-center justify-center mt-14 px-5'>
            <div className='card bg-base-200 w-full max-w-md shrink-0'>
                <form onSubmit={handlesignInBtn} className="card-body">
                    <h1 className='text-3xl font-semibold text-center'>Login your account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-12 right-4'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                        {/* <div className='flex justify-between items-center'>
                            <label></label>
                            <label className="label mt-2" onClick={handleForgetPassword}>
                                <a href="#" className="text-sm link link-hover font-semibold text-gray-700">Forgot password?</a>
                            </label>
                        </div> */}
                    </div>
                    <div className="form-control mt-1">
                        <button className="btn btn-primary text-white">Login</button>
                    </div>
                    {
                        error && (<p className='text-red-500 font-semibold text-center text-sm'>{error}</p>)
                    }
                    <div onClick={handleSignInGoogle} className='flex items-center justify-center py-2 btn btn-outline btn-primary mt-2 text-gray-700 hover:text-white'>
                        <img className='w-6' src={googleLogo} alt="" />
                        <span>Login with Google</span>
                    </div>
                    <Link to='/signup' className='font-semibold text-red-500 text-center text-sm'>Don't Have an account? Register</Link>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
