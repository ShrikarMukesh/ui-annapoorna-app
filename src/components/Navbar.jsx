import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container-custom flex justify-between items-center h-20">
                {/* Logo and Location */}
                <div className="flex items-center space-x-8">
                    <Link to="/" className="flex items-center">
                        <span className="text-3xl font-extrabold text-primary">Annapoorna</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-2 text-sm text-gray-light hover:text-primary cursor-pointer transition-colors">
                        <FaMapMarkerAlt className="text-lg" />
                        <span className="font-bold text-secondary border-b-2 border-black hover:text-primary hover:border-primary">Bangalore</span>
                        <span className="text-gray-400">560001, Karnataka, India</span>
                    </div>
                </div>

                {/* Search, Offers, Help, User, Cart */}
                <div className="flex items-center space-x-10">
                    <div className="hidden lg:flex items-center space-x-3 cursor-pointer hover:text-primary text-secondary font-medium">
                        <FaSearch />
                        <span>Search</span>
                    </div>
                    {/*<div className="hidden lg:flex items-center space-x-3 cursor-pointer hover:text-primary text-secondary font-medium">*/}
                    {/*    <RiDiscountPercentLine size={20} />*/}
                    {/*    <span>Offers</span>*/}
                    {/*</div>*/}

                    <Link to="/login" className="flex items-center space-x-3 cursor-pointer hover:text-primary text-secondary font-medium">
                        <FaUser />
                        <span>Sign In</span>
                    </Link>

                    <Link to="/cart" className="flex items-center space-x-3 cursor-pointer hover:text-primary text-secondary font-medium">
                        <FaShoppingCart />
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
