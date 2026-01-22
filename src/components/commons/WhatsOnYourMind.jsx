import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const foodItems = [
    { name: 'Burgers', img: 'public/images/burger.jpg' },
    { name: 'Pizzas', img: 'public/images/Pizzas.jpg' },
    { name: 'Rolls', img: 'public/images/Rolls1.avif' },
    { name: 'Biryani', img: 'public/images/Biryani.avif' },
    { name: 'Cakes', img: 'public/images/cake.avif' },
    { name: 'Samosa', img: 'public/images/Samosa.avif' },
    { name: 'Momos', img: 'public/images/burger.jpg' },
    { name: 'Chinese', img: 'public/images/burger.jpg' },
    { name: 'Pastry', img: 'public/images/burger.jpg' },
    { name: 'Shawarma', img: 'public/images/burger.jpg' },
    { name: 'South Indian', img: 'public/images/burger.jpg' },
    { name: 'Pakoda', img: 'public/images/burger.jpg' },
    { name: 'Noodles', img: 'public/images/burger.jpg' },
    { name: 'Pasta', img: 'public/images/burger.jpg' },
    { name: 'Pav Bhaji', img: 'public/images/burger.jpg' },
    { name: 'Shake', img: 'public/images/burger.jpg' },
    { name: 'Salad', img: 'public/images/burger.jpg' },
];

const WhatsOnYourMind = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <Slider {...settings}>
                    {foodItems.map((item, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-blend-lighten-500 rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-24 object-cover mb-4 rounded-full shadow-lg"
                                />
                                <p className="text-center text-sm font-medium">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WhatsOnYourMind;