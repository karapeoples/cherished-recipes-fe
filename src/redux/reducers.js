import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {SET_ERROR, GET_RECIPES, POST_NEW_RECIPE} from './actions'

const initialState = {
	recipes: [],
	error: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: action.payload,
			}
		case POST_NEW_RECIPE: {
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			}
		}
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store