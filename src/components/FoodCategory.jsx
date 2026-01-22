import React from 'react';
import Slider from "react-slick";

const FoodCategory = ({ categories }) => {
    // Dummy categories if not provided
    const items = categories || [
        { id: 1, name: "Biryani", image: "https://b.zmtcdn.com/data/dish_images/d19ec315294693b9961a80fa9012a4a31617266252.png" },
        { id: 2, name: "Pizza", image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" },
        { id: 3, name: "Chicken", image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" },
        { id: 4, name: "Burger", image: "https://b.zmtcdn.com/data/dish_images/ccb7dc653753e43d9d56568a2ec703cc1617463035.png" },
        { id: 5, name: "Thali", image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0ee813a22105a94adc1632716697.png" },
        { id: 6, name: "North Indian", image: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be0101f01632716658.png" },
        { id: 7, name: "Dosa", image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91ed7487ff61632716660.png" },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <div className="py-8 border-b border-gray-100">
            <div className="container-custom">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Inspiration for your first order</h2>
                <div className="overflow-hidden">
                    {/* Simplistic implementation, can be replaced with Slider if needed, but horizontal scroll is often cleaner for categories */}
                    <div className="flex space-x-8 overflow-x-auto pb-4 no-scrollbar">
                        {items.map((item) => (
                            <div key={item.id} className="flex-shrink-0 cursor-pointer flex flex-col items-center group">
                                <div className="w-36 h-36 rounded-full overflow-hidden mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg text-gray-700 font-medium group-hover:text-primary transition-colors">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCategory;
