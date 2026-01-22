import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-6 bg-white">
                    {/* Profile Header */}
                    <ProfileHeader />

                    {/* Past Orders */}
                    <PastOrders />
                </div>
            </div>
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className="w-64 bg-blue-900 text-white min-h-screen p-6">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Shrikar</h2>
                <p>9845484475 . mukesh.shrikar11@gmail.com</p>
            </div>

            <nav className="mt-6">
                <SidebarItem icon="📦" label="Orders" />
                <SidebarItem icon="💼" label="Swiggy One" />
                <SidebarItem icon="❤️" label="Favourites" />
                <SidebarItem icon="💳" label="Payments" />
                <SidebarItem icon="📍" label="Addresses" />
                <SidebarItem icon="⚙️" label="Settings" />
            </nav>
        </div>
    );
};

const SidebarItem = ({ icon, label }) => {
    return (
        <div className="flex items-center mb-4">
            <span className="text-lg">{icon}</span>
            <span className="ml-3">{label}</span>
        </div>
    );
};

const ProfileHeader = () => {
    return (
        <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold">Shrikar</h1>
                <p className="text-gray-600">mukesh.shrikar11@gmail.com</p>
            </div>
            <button className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-lg">
                Edit Profile
            </button>
        </div>
    );
};

const PastOrders = () => {
    const orders = [
        {
            id: 1,
            restaurant: 'Sai Prasadam',
            location: 'Vijay Nagar',
            deliveredOn: 'Thu, Dec 21, 2023, 10:14 PM',
            items: 'North Indian Meal x 1',
            total: '₹ 190',
            imageUrl: 'https://via.placeholder.com/100x100',
        },
        {
            id: 2,
            restaurant: 'KFC',
            location: 'Vijayanagar',
            deliveredOn: 'Wed, Nov 29, 2023, 09:06 PM',
            items: '2 X Veg Krisper Burgers x 1',
            total: '₹ 396',
            imageUrl: 'https://via.placeholder.com/100x100',
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Past Orders</h2>
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
        </div>
    );
};

const OrderCard = ({ order }) => {
    return (
        <div className="border p-4 mb-4 rounded-lg shadow-md">
            <div className="flex items-center">
                <img
                    src={order.imageUrl}
                    alt={order.restaurant}
                    className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="ml-4">
                    <h3 className="text-xl font-semibold">{order.restaurant}</h3>
                    <p className="text-gray-600">{order.location}</p>
                    <p className="text-gray-500 text-sm">ORDER #{order.id}</p>
                    <p className="text-sm text-gray-500">{order.deliveredOn}</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-gray-700">{order.items}</p>
                <div className="flex justify-between items-center mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
                        REORDER
                    </button>
                    <button className="bg-gray-200 text-black py-2 px-4 rounded-lg">
                        HELP
                    </button>
                    <p className="font-semibold text-gray-800">Total Paid: {order.total}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
