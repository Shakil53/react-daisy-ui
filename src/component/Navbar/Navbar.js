import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (



        <div className="navbar bg-primary text-primary-content max-w-screen-xl mx-auto">
            <Link className='btn btn-ghost normal-case text-lg' to='/'>Home</Link>
            <Link className='btn btn-ghost normal-case text-lg' to='/login'>Log in</Link>
            <Link className='btn btn-ghost normal-case text-lg' to='/register'>Register</Link>
            <Link className='btn btn-ghost normal-case text-lg' to='/order'>Order</Link>
            <Link className='btn btn-ghost normal-case text-lg' to='/inventory'>Inventory</Link>
            <Link className='btn btn-ghost normal-case text-lg' to='/about'>About</Link>
        </div>

    );
};

export default Navbar;