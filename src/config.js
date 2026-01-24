const config = {
    auth: {
        baseUrl: 'http://localhost:9094/auth',
        signin: '/signin',
        signup: '/signup',
        validate: '/validate'
    },
    customer: {
        baseUrl: 'http://localhost:9095/api/v1/customers', // Assuming generic port, update if needed
    },
    order: {
        baseUrl: 'http://localhost:9097/api/v1/orders',
    },
    restaurant: {
        baseUrl: 'http://localhost:9190/api/v1/restaurants',
    }
};

export default config;
