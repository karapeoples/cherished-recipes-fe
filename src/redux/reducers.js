import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {SET_ERROR} from './actions'

const initialState = {
	error: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
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
console.log('THIS IS THE STORE!', store.getState())
export default store