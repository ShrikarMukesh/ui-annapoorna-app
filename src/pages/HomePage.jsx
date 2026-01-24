import React, { useState, useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel.jsx';
import FoodCategory from '../components/FoodCategory.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';
import Footer from '../components/commons/Footer.jsx';
import axios from 'axios';
import config from '../config';

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Fetch from API
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get(config.restaurant.baseUrl);
                if (response.data && response.data.length > 0) {
                    const mappedRestaurants = response.data.map(rest => ({
                        id: rest.restaurantId,
                        name: rest.name,
                        cuisine: rest.cuisines,
                        rating: rest.averageRating,
                        deliveryTime: 30 + Math.floor(Math.random() * 20), // Placeholder as API doesn't have this
                        priceForTwo: "₹400 for two", // Placeholder
                        imageUrl: rest.cloudinaryImageId ? (rest.cloudinaryImageId.startsWith('http') ? rest.cloudinaryImageId : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${rest.cloudinaryImageId}`) : "https://via.placeholder.com/300",
                        discount: ""
                    }));
                    setRestaurants(mappedRestaurants);
                } else {
                    useDummyData();
                }
            } catch (error) {
                console.error("Failed to fetch restaurants:", error);
                useDummyData();
            }
        };

        const useDummyData = () => {
            const dummyRestaurants = [
                {
                    id: "1",
                    name: "Meghana Foods",
                    cuisine: ["Biryani", "Andhra", "North Indian"],
                    rating: 4.4,
                    deliveryTime: 35,
                    priceForTwo: "₹500 for two",
                    imageUrl: "https://b.zmtcdn.com/data/pictures/chains/1/50691/11d0b1359c2b9a7000d6B00c61.jpg",
                    discount: "50% OFF"
                },
                {
                    id: "2",
                    name: "Empire Restaurant",
                    cuisine: ["North Indian", "Kebabs", "Biryani"],
                    rating: 4.1,
                    deliveryTime: 45,
                    priceForTwo: "₹450 for two",
                    imageUrl: "https://b.zmtcdn.com/data/pictures/chains/5/50495/104d4d03752e16428c9794cb58a5da26.jpg",
                    discount: "10% OFF"
                },
                {
                    id: "3",
                    name: "Kannur Food Point",
                    cuisine: ["Kerala", "Chinese"],
                    rating: 3.9,
                    deliveryTime: 25,
                    priceForTwo: "₹300 for two",
                    imageUrl: "https://b.zmtcdn.com/data/pictures/chains/2/51692/9c7f212239322c3653b4aa5a4843477e.jpg",
                    discount: ""
                },
                {
                    id: "4",
                    name: "Truffles",
                    cuisine: ["Burger", "American", "Italian"],
                    rating: 4.5,
                    deliveryTime: 30,
                    priceForTwo: "₹900 for two",
                    imageUrl: "https://b.zmtcdn.com/data/pictures/chains/4/50674/09c70817ec937a4e698888b560662d06.jpg",
                    discount: "20% OFF"
                }
            ];
            setRestaurants(dummyRestaurants);
        };

        fetchRestaurants();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <HeroCarousel />

            <FoodCategory />

            <div className="container-custom py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Top restaurants in Bangalore</h2>
                    <div className="flex space-x-4 text-gray-500 text-sm cursor-pointer">
                        <span className="hover:text-primary">Filters</span>
                        <span className="hover:text-primary">Sort By</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {restaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;