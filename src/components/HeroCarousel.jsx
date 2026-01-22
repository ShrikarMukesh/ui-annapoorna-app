import React from 'react';
import Slider from "react-slick";

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const banners = [
        { id: 1, image: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e85c9af11632716604.png", alt: "Banner 1" },
        { id: 2, image: "https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png", alt: "Banner 2" },
    ];

    return (
        <div className="bg-gray-100 py-4">
            <div className="container px-4 mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-sm">
                    {/* Placeholder for actual carousel if images don't load well, or use solid colors */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-64 flex items-center justify-center text-white text-3xl font-bold">
                        <div className="text-center">
                            <h1>50% OFF on First Order</h1>
                            <p className="text-sm font-normal mt-2">Use Code: WELCOME50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
