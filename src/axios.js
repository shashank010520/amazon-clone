import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/amzon-challenge-94272/us-central1/api' //the api (cloud function ) URL
});

export default instance;