import axios from 'axios'

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token')

	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
		},
		baseURL: 'https://sfr-3.herokuapp.com/api',
	})
}
