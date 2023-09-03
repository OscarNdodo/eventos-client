// import env from "dotenv";
import axios from "axios";

// env.config()
const api = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 3000
})

export default api;