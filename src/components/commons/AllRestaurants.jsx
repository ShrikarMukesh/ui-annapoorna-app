import { useEffect, useState } from 'react';
import Restaurant from './Restaurant.jsx';
import axios from 'axios';

const AllRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9084/api/v1/restaurants')
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the restaurant data!', error);
            });
    }, []);

    return (
        <div>
            <section className="bg-black-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-black-500 mb-6 text-center">
                        Restaurants with Online Food Delivery in Bangalore
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {restaurants.map((restaurant) => (
                            <Restaurant key={restaurant.restaurantId} restaurant={restaurant} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AllRestaurants;