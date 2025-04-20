import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { CartContext } from '../../providers/Contexts';

const Navbar = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className="navbar p-0 bg-base-100 shadow-sm mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="navbar-start py-2 md:py-0">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden cursor-pointer mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold space-y-3">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}>About</NavLink>
                        <li className='relative'><NavLink to='/cart' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}><MdShoppingCart size={20} />
                            <p className='absolute -top-1 right-0'>{cart.length || 0}</p>
                        </NavLink></li>
                        <NavLink to='/favorite' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}><MdBookmarkAdd size={20} />
                        </NavLink>
                    </ul>
                </div>
                <Link to='/' className='font-bold text-2xl md:text-3xl'>Phone <span className='text-gray-500'>Gallery</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex gap-5">
                <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}>Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}>About</NavLink>
                    <li className='relative'><NavLink to='/cart' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}><MdShoppingCart size={20} />
                        <p className='absolute -top-1 right-0'>{cart.length || 0}</p>
                    </NavLink></li>
                    <NavLink to='/favorite' className={({ isActive }) => isActive ? 'text-indigo-600' : ''}><MdBookmarkAdd size={20} />
                    </NavLink>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;