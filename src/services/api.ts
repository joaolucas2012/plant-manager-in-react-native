import axios from "axios";

const api = axios.create({
    baseURL: "http://200.235.88.32:3333", 
});

export default api;