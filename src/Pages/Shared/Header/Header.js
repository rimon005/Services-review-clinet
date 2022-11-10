import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/download.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()

    }

    const menuItems = <>
        <li><Link to='/'> Home</Link></li>
        <li><Link> About</Link></li>
        <li><Link> Contact </Link></li>
        <li><Link to='/blog'> Blog </Link></li>
        

        {
            user?.uid ?
                <>
                    <li><Link to='/myReviews'> My Reviews </Link></li>
                    <li><Link to='/addService'> Add Service </Link></li>
                    <li onClick={handleLogOut}><Link> LogOut</Link></li>
                </>
                :
                <li><Link to='/login'> Login</Link></li>
        }

    </>
    return (
        <div className="navbar text-white flex justify-between" style={{ background: "#272C3F" }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;