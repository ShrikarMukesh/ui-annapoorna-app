import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login
    const navigate = useNavigate();

    useEffect(() => {
        // Assume you store the login state in local storage or a global state
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Set login based on token presence
    }, []);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <Outlet />
        </>
    );
}

export default MainLayout;
