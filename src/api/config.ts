import axios from 'axios';

export const API_URL = 'https://jsonplaceholder.typicode.com';

export const defaultHeader = {
	'Content-type': 'application/json'
};

export default axios.create({
	baseURL: API_URL ,
	headers: defaultHeader
});