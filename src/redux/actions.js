import { axiosWithAuth } from '../utils/axiosWithAuth'
import { history } from '../index'

export const POST_NEW_USER = 'POST_NEW_USER'
export const LOGIN = 'LOGIN'
export const GET_RECIPES = 'GET_RECIPES'
export const POST_NEW_RECIPE = 'POST_NEW_RECIPE'
export const SET_ERROR = 'SET_ERROR'



export const postNewUser = (newUser) => dispatch => {
  axiosWithAuth()
			.post('/auth/register', newUser)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				localStorage.setItem('user_id', res.data.user_id)
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
				localStorage.setItem('user_id', res.data.user_id)
				history.push(`/user-dash/${res.data.user_id}`)
			})
			.catch((err) => {
				console.log('Oops Error', err)
				dispatch({ type: SET_ERROR, payload: 'error logging in' })
			})
}

export const getRecipes = () => dispatch => {
  axiosWithAuth()
			.get('/recipes')
			.then((res) => {
				dispatch({ type: GET_RECIPES, payload: res.data })
			})
			.catch((err) => {
				console.log('Oops Error', err)
				dispatch({ type: SET_ERROR, payload: 'error retrieving recipes' })
			})
}

export const postNewRecipe = (newRecipe) => dispatch => {
	axiosWithAuth()
		.post(`/recipes/user/${newRecipe.user_id}`, newRecipe)
		.then((res) => {
			const userId = localStorage.getItem('user_id')
			dispatch({ type: POST_NEW_RECIPE, payload: res.data })
			history.push(`/user-dash/${userId}`)
		})
		.catch((err) => {
			console.log('Oops Error', err)
			dispatch({ type: SET_ERROR, payload: 'error adding the recipe' })
		})
}