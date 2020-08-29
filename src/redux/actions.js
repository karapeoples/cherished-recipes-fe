import { axiosWithAuth } from '../utils/axiosWithAuth'
import { history } from '../index'

export const POST_NEW_USER = 'POST_NEW_USER'
export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'


export const postNewUser = (newUser) => dispatch => {
  axiosWithAuth()
			.post('/auth/register', newUser)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				history.push(`/user-dash/${res.data.user_id}`)
			})
			.catch((err) => {
				console.log('Oops Error', err)
				dispatch({ type: SET_ERROR, payload: 'error registering' })
			})
}

export const login = (creds) => dispatch => {
  axiosWithAuth()
			.post('/auth/login', creds)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				history.push(`/user-dash/${res.data.user_id}`)
			})
			.catch((err) => {
				console.log('Oops Error', err)
				dispatch({ type: SET_ERROR, payload: 'error logging in' })
			})
}