import axios from 'axios';

const api = axios.create ({

	baseURL: 'http://10.0.3.2:3000',
	// baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

});

/* api.interceptors.request.use(
	(config) => {
	    config.headers.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDRmNzE4MTEzMTZjMTk4MDliOWExMyIsImlhdCI6MTU1NzAwNzc1MCwiZXhwIjoxNTU3MDk0MTUwfQ.lwjJolF63BIqh-kSidmYDtA7m83sVYDOi2dWn2exn_Y'}`;
		console.log(config)
		return Promise.resolve(config)
	},
	error => {
		return Promise.reject(error);
	}
); */

export default api