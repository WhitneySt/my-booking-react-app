const URL_BASE = 'https://booking-api-rest-qwj8.onrender.com/';

const endpoints = {
    userByEmailAndPassword: (email, password) => `${URL_BASE}users?email=${email}&&password=${password}`,
    users: `${URL_BASE}users`,
    findUserByEmail: (email) => `${URL_BASE}users?email=${email}`,
    accommodations: `${URL_BASE}accommodations`,
    categories: `${URL_BASE}category`,
    categoryById: (id)=>`${URL_BASE}category/${id}`

};

export default endpoints;