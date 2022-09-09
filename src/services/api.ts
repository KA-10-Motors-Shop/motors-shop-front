import axios from "axios";

const api = axios.create({
	baseURL: "https://motors-shop-api.herokuapp.com/",
});

export default api;
