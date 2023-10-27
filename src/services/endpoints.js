const URL_BASE = 'https://booking-api-rest-qwj8.onrender.com/';

const endpoints = {
    userByEmailAndPassword: (email, password) => `${URL_BASE}users?email=${email}&&password=${password}`,
    users: `${URL_BASE}users`,
    findUserByEmail: (email) => `${URL_BASE}users?email=${email}`
};

export default endpoints;