const URL_BASE = 'https://booking-api-rest-qwj8.onrender.com/';

const endpoints = {
    userByEmailAndPassword: (email, password) => `${URL_BASE}users?email=${email}&&password=${password}`
};

export default endpoints;