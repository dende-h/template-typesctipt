import axios from "axios";

const token: string | null = localStorage.getItem("authToken");

const baseURL: string | undefined = process.env.REACT_APP_BASE_URL;
const headers = { "Content-Type": "application/json" };

const postHeaders = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

export const loginApi = axios.create({
	baseURL,
	headers
});

export const memoApi = axios.create({
	baseURL,
	headers: postHeaders
});
