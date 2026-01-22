import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.jpg';

// eslint-disable-next-line react/prop-types
const NavBar = ({ isLoggedIn }) => {
    return (
        <div>
            <nav className="bg-orange-700 border-b border-orange-900">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            <Link to="/" className="flex flex-shrink-0 items-center">
                                <img className="h-10 w-auto" src={logo} alt="Food Delivery" />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2">Food Delivery</span>
                            </Link>
                            <div className="md:ml-auto">
                                <div className="flex space-x-4">
                                    <Link to="/" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Home</Link>
                                    <Link to="/restaurants" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Restaurants</Link>
                                    <Link to="/offers" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Offers</Link>
                                    <Link to="/cart" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Cart</Link>
                                    {isLoggedIn && (
                                        <>
                                            <Link to="/orders" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Orders</Link>
                                            <Link to="/favorites" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Favorites</Link>
                                            <Link to="/profile" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Profile</Link>
                                            <Link to="/logout" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Logout</Link>
                                        </>
                                    )}
                                    {!isLoggedIn && (
                                        <Link to="/login" className="text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2">Login</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;