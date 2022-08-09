import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar = () => {

    const {user, logout} = UserAuth();
    const navigator = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigator("/");
        }catch(error){ console.log(error)}
    }

    console.log(user);
    return (
        <div className="flex flex-row items-center justify-between p-4 w-full z-[100] absolute">
            <Link to="/">
                <h1 className="text-red-600  text-4xl font-bold cursor-pointer"> Netfilx </h1>
            </Link>
           {
                user?.email ?  
                    <div>
                        <Link to='/account'>
                            <button className="text-white pr-4">Account</button>
                        </Link>
                        
                        <button onClick={handleLogout} className="px-6 py-2 bg-red-600 rounded cursor-pointer"> 
                            Logout
                        </button>
                        
                    </div> 
                    :
                        <div>
                            <Link to='/signup'>
                                <button className="text-white pr-4"> Sing Up</button>
                            </Link>
                            <Link to="/login">
                                <button className="px-6 py-2 bg-red-600 rounded cursor-pointer"> Sing In</button>
                            </Link>
                        </div>

           }
        </div>
    );
}

export default Navbar;
