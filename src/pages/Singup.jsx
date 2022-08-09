import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Singup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigator = useNavigate();

    const {user, signup} = UserAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signup(email, password);
            navigator("/")
        } catch(error) { console.log(error)}
    }
    return (
        <>
            <div className="w-full h-screen">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/83dcfc3c-a4a8-4c7a-9ef6-ae46d47cab9c/PK-en-20220801-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="/"
                    className="hidden sm:block absolute w-full h-full object-cover"
                />
                <div className="bg-black/60 fixed top- left-0 w-full h-screen"></div>
                
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px]
                        mx-auto bg-black/75 text-white">
                            <div className="max-w-[320px] mx-auto py-16">
                                <h1 className="text-3xl font-bold">Sing Up </h1>
                                <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                                    <input onChange={(event) => setEmail(event.target.value)} className="py-3 my-2 bg-gray-700 text-center outline-none border-none rounded" type='email' placeholder='email'/>
                                    <input onChange={(event) => setPassword(event.target.value)} className="py-3 my-2 bg-gray-700 text-center outline-none border-none rounded" type='password' placeholder='password' />
                                    <button className="bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700/50">Sing Up</button>
                                    <div className="flex justify-between items-center
                                        text-small text-gray-400">
                                        <p> <input type='checkbox' /> Remember Me</p>
                                        <p> Need Help </p>
                                    </div>
                                    <p className="py-4"> <span className="text-gray-500"> Already Subscribed To Netflix</span> <Link to="/signin"> Sing in</Link></p>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Singup;
