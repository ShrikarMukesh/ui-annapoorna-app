import React, { useState } from 'react';
import { FiPackage, FiMapPin, FiCreditCard, FiSettings, FiHeart, FiUser, FiEdit2 } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: 'Shrikar',
        phone: '9845484475',
        email: 'mukesh.shrikar11@gmail.com'
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // In a real app, we would make an API call here
        console.log("Saved user details:", user);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-80 bg-blue-900 text-white p-6 shadow-xl z-10 flex-shrink-0">
                <div className="mb-10 text-center md:text-left">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center text-blue-900 text-3xl font-bold">
                        {user.name.charAt(0)}
                    </div>
                    <h2 className="text-2xl font-bold truncate">{user.name}</h2>
                    <p className="text-blue-200 text-sm mt-1">{user.phone}</p>
                    <p className="text-blue-200 text-sm truncate">{user.email}</p>
                </div>

                <nav className="space-y-2">
                    <SidebarItem
                        icon={<FiUser />}
                        label="Profile"
                        active={activeTab === 'profile'}
                        onClick={() => setActiveTab('profile')}
                    />
                    <SidebarItem
                        icon={<FiPackage />}
                        label="Orders"
                        active={activeTab === 'orders'}
                        onClick={() => setActiveTab('orders')}
                    />
                    <SidebarItem
                        icon={<FiHeart />}
                        label="Favourites"
                        active={activeTab === 'favourites'}
                        onClick={() => setActiveTab('favourites')}
                    />
                    <SidebarItem
                        icon={<FiCreditCard />}
                        label="Payments"
                        active={activeTab === 'payments'}
                        onClick={() => setActiveTab('payments')}
                    />
                    <SidebarItem
                        icon={<FiMapPin />}
                        label="Addresses"
                        active={activeTab === 'addresses'}
                        onClick={() => setActiveTab('addresses')}
                    />
                    <SidebarItem
                        icon={<FiSettings />}
                        label="Settings"
                        active={activeTab === 'settings'}
                        onClick={() => setActiveTab('settings')}
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-12 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    {activeTab === 'profile' && (
                        <ProfileDetails
                            user={user}
                            isEditing={isEditing}
                            onEditToggle={handleEditToggle}
                            onSave={handleSave}
                            onChange={handleInputChange}
                        />
                    )}
                    {activeTab === 'orders' && <PastOrders />}
                    {activeTab === 'favourites' && <Placeholder title="Favourites" message="Your favourite restaurants will appear here." />}
                    {activeTab === 'payments' && <Placeholder title="Payments" message="Manage your payment methods." />}
                    {activeTab === 'addresses' && <Placeholder title="Addresses" message="Manage your delivery addresses." />}
                    {activeTab === 'settings' && <Placeholder title="Settings" message="App settings and preferences." />}
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center p-4 rounded-lg transition-all duration-200 ${active
                    ? 'bg-white text-blue-900 font-semibold shadow-md transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
        >
            <span className="text-xl mr-4">{icon}</span>
            <span>{label}</span>
        </button>
    );
};

const ProfileDetails = ({ user, isEditing, onEditToggle, onSave, onChange }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-in">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                    <p className="text-gray-500 mt-1">Manage your account details</p>
                </div>
                {!isEditing && (
                    <button
                        onClick={onEditToggle}
                        className="flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors shadow-sm font-medium"
                    >
                        <FiEdit2 size={18} />
                        Edit Profile
                    </button>
                )}
            </div>

            <form onSubmit={onSave}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup
                        label="Full Name"
                        name="name"
                        value={user.name}
                        isEditing={isEditing}
                        onChange={onChange}
                    />
                    <InputGroup
                        label="Phone Number"
                        name="phone"
                        value={user.phone}
                        isEditing={isEditing}
                        onChange={onChange}
                        type="tel"
                    />
                    <InputGroup
                        label="Email Address"
                        name="email"
                        value={user.email}
                        isEditing={isEditing}
                        onChange={onChange}
                        type="email"
                    />
                </div>

                {isEditing && (
                    <div className="mt-8 flex gap-4 justify-end">
                        <button
                            type="button"
                            onClick={onEditToggle}
                            className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors shadow-sm"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

const InputGroup = ({ label, name, value, isEditing, onChange, type = "text" }) => (
    <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
        {isEditing ? (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
            />
        ) : (
            <div className="text-lg text-gray-800 font-medium py-2 border-b border-transparent">
                {value}
            </div>
        )}
    </div>
);

const PastOrders = () => {
    const orders = [
        {
            id: 1,
            restaurant: 'Sai Prasadam',
            location: 'Vijay Nagar',
            deliveredOn: 'Thu, Dec 21, 2023, 10:14 PM',
            items: 'North Indian Meal x 1',
            total: '₹ 190',
            imageUrl: 'https://via.placeholder.com/100',
            status: 'Delivered'
        },
        {
            id: 2,
            restaurant: 'KFC',
            location: 'Vijayanagar',
            deliveredOn: 'Wed, Nov 29, 2023, 09:06 PM',
            items: '2 X Veg Krisper Burgers x 1',
            total: '₹ 396',
            imageUrl: 'https://via.placeholder.com/100',
            status: 'Delivered'
        },
    ];

    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Past Orders</h2>
            <div className="space-y-6">
                {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
};

const OrderCard = ({ order }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
                        alt={order.restaurant}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{order.restaurant}</h3>
                            <p className="text-gray-500 text-sm mt-1">{order.location}</p>
                        </div>
                        <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-medium">
                            <MdVerified className="mr-1" /> {order.status}
                        </div>
                    </div>

                    <div className="mt-4 text-gray-600 text-sm">
                        <p>{order.items}</p>
                        <p className="mt-1 text-gray-400">Ordered on: {order.deliveredOn}</p>
                    </div>

                    <div className="border-t border-gray-100 mt-4 pt-4 flex flex-wrap justify-between items-center gap-4">
                        <p className="font-bold text-gray-800">Total Paid: {order.total}</p>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                REORDER
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                HELP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Placeholder = ({ title, message }) => (
    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm animate-fade-in">
        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiSettings className="text-gray-400 text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500">{message}</p>
    </div>
);

export default Profile;