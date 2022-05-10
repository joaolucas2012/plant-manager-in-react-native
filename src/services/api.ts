import axios from "axios";

const api = axios.create({
    baseURL: "http://200.235.91.193:3333", 
});

export default api;