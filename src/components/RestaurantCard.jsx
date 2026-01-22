import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    const { id, name, cuisine, rating, deliveryTime, priceForTwo, imageUrl, discount } = restaurant;
    const [imageSrc, setImageSrc] = React.useState(imageUrl);

    const handleImageError = () => {
        setImageSrc("https://b.zmtcdn.com/data/pictures/chains/1/50691/11d0b1359c2b9a7000d6B00c61.jpg"); // Fallback
    };

    return (
        <Link to={`/restaurant/${id}`} className="block w-full">
            <div className="card-hover p-4 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                    <img
                        src={imageSrc || "https://b.zmtcdn.com/data/pictures/chains/1/50691/11d0b1359c2b9a7000d6B00c61.jpg"}
                        alt={name}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                    {discount && (
                        <div className="absolute bottom-2 left-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase rounded-r-sm">
                            {discount}
                        </div>
                    )}
                </div>

                <div className="mt-3">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-secondary truncate">{name}</h3>
                        <div className={`flex items-center space-x-1 px-1.5 py-0.5 rounded text-white text-xs font-bold ${rating > 0 ? (rating >= 4.0 ? 'bg-green-600' : 'bg-orange-500') : 'bg-gray-400'}`}>
                            {rating > 0 ? (
                                <>
                                    <span>{rating}</span>
                                    <FaStar size={10} />
                                </>
                            ) : (
                                <span>NEW</span>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-light mt-1">
                        <p className="truncate w-1/2">{cuisine?.join(', ')}</p>
                        <p>{priceForTwo}</p>
                    </div>

                    <div className="flex items-center text-xs text-gray-500 mt-2 border-t pt-2 border-dashed border-gray-300">
                        <span className="font-bold text-gray-600">{deliveryTime} min</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;
