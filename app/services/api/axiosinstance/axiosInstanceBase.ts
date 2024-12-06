import { getAuthToken } from "../../../../cxt";
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.EXPO_PUBLIC_BASE_URL
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = getAuthToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		// if (!config.headers["Content-Type"]) {
		//     config.headers["Content-Type"] = "multipart/form-data";
		// }

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export const axiosInstanceMultipart = axios.create({
	baseURL: process.env.EXPO_PUBLIC_BASE_URL,
	headers: {
		"Content-Type": "multipart/form-data"
	}
});

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'multipart/form-data'
//   }
// });

axiosInstanceMultipart.interceptors.request.use(
	(config) => {
		const token = getAuthToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		// if (!config.headers["Content-Type"]) {
		//     config.headers["Content-Type"] = "multipart/form-data";
		// }

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
// Add a default export
export default axiosInstance;
