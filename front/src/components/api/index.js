import axios from "axios";
import env from "../../env.js";

const api = axios.create({
    baseURL: env.SERVER_REST,
});

export default api;