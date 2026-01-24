import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaClock, FaRupeeSign } from 'react-icons/fa';

import axios from 'axios';
import config from '../config';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            // Basic validation
            if (!id) return;

            try {
                // Fetch specific restaurant details
                const response = await axios.get(`${config.restaurant.baseUrl}/${id}`);
                const foundRestaurant = response.data;

                if (foundRestaurant) {
                    // Group menu items by category
                    // Ensure menu exists and is an array
                    const menuItems = Array.isArray(foundRestaurant.menu) ? foundRestaurant.menu : [];

                    const menuByCategory = menuItems.reduce((acc, item, index) => {
                        const category = item.category || "Others";
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push({
                            id: item.id || `menu-item-${index}`,
                            name: item.name,
                            price: item.price,
                            description: item.description,
                            isVeg: item.veg !== undefined ? item.veg : true,
                            image: item.imageId || ""
                        });
                        return acc;
                    }, {});

                    const menu = Object.keys(menuByCategory).map(category => ({
                        category,
                        items: menuByCategory[category]
                    }));

                    setRestaurant({
                        id: foundRestaurant.restaurantId,
                        name: foundRestaurant.name,
                        cuisine: foundRestaurant.cuisines || [],
                        rating: foundRestaurant.averageRating || "New",
                        deliveryTime: "30-40", // Placeholder
                        priceForTwo: "₹400 for two", // Placeholder
                        address: foundRestaurant.address ? `${foundRestaurant.address.street || ''}, ${foundRestaurant.address.city || ''}` : "Bangalore",
                        menu: menu
                    });
                }
            } catch (error) {
                console.error("Error fetching restaurant details:", error);
            }
        };

        fetchRestaurantDetails();
    }, [id]);

    if (!restaurant) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="container-custom py-10 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-dashed border-gray-300 pb-6 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{restaurant.name}</h1>
                    <p className="text-sm text-gray-500 mb-1">{restaurant.cuisine.join(", ")}</p>
                    <p className="text-sm text-gray-500">{restaurant.address}</p>

                    <div className="flex items-center space-x-4 mt-4 text-sm font-bold text-gray-700">
                        <div className="flex items-center space-x-1">
                            <FaClock /> <span>{restaurant.deliveryTime} mins</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaRupeeSign /> <span>{restaurant.priceForTwo}</span>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-200 rounded p-2 flex flex-col items-center shadow-sm">
                    <div className="flex items-center space-x-1 text-green-600 font-bold text-lg border-b border-gray-200 pb-1 mb-1">
                        <span>{restaurant.rating}</span>
                        <FaStar size={14} />
                    </div>
                    <span className="text-xs text-gray-400">1K+ ratings</span>
                </div>
            </div>

            {/* Menu */}
            <div className="max-w-4xl mx-auto">
                {restaurant.menu.map((section, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{section.category} ({section.items.length})</h3>
                        {section.items.map(item => (
                            <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-6 mb-6 last:border-0 last:mb-0">
                                <div className="w-9/12 pr-4">
                                    <div className={`w-4 h-4 border-2 flex items-center justify-center mb-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                                        <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                    </div>
                                    <h4 className="text-gray-800 font-bold mb-1">{item.name}</h4>
                                    <span className="text-gray-700 font-medium text-sm">₹{item.price}</span>
                                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">{item.description}</p>
                                </div>
                                <div className="w-3/12 relative h-28 w-32">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">No Image</div>
                                    )}
                                    <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 border border-gray-200 shadow font-bold px-8 py-1.5 rounded uppercase text-sm hover:shadow-md transition-shadow">
                                        Add
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="h-2 bg-gray-100 -mx-4 mb-4"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantDetails;
