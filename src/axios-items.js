import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://barter-5f642.firebaseio.com/'
});

export default instance;