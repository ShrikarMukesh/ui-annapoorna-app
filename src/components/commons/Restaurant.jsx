import React from 'react';
import { FaStar } from 'react-icons/fa';
const Restaurant = ({ restaurant }) => {
    const renderStarRating = (rating) => {
        const percentage = (rating / 5) * 100;
        return (
            <div className="relative inline-block">
                <FaStar className="text-gray-300" />
                <FaStar className="text-yellow-500 absolute top-0 left-0 overflow-hidden" style={{ width: `${percentage}%` }} />
            </div>
        );
    };
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl font-bold">{restaurant.name}</h3>
                </div>
                <img src={restaurant.cloudinaryImageId} alt={restaurant.name}
                     className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg"/>
                <div className="text-indigo-500 mb-2">{restaurant.location}</div>

                <div className="flex items-center mb-2">
                    {restaurant.averageRating}
                    <FaStar className="text-green-900 mr-9"></FaStar>
                </div>
                <div className="text-gray-700 mb-2">Cuisines: {restaurant.cuisines.join(', ')}</div>
            </div>
        </div>
    );
};

export default Restaurant;