import Slider from 'react-slick';

const topRestaurants = [
    { name: 'Chinese Wok', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' },
    { name: 'Theobroma', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' },
    { name: 'KFC 3', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' },
    { name: 'Pizza Hut', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' },
    { name: 'Udupi Gokula', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' },
    { name: 'Udupi Gokula', image: 'src/assets/restaurants/udupi.jpg' },
];

const TopRestaurant = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="bg-orange-450 py-20 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-black mb-6">Top Restaurants in Bangalore</h2>
                <Slider {...settings}>
                    {topRestaurants.map((restaurant, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{restaurant.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TopRestaurant;