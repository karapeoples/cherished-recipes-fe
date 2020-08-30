import React from 'react'
import { editRecipe } from '../redux/actions'
import {history} from '../index'
import {useDispatch} from 'react-redux'


const EditRecipe = ({ setToggle, recipeToEdit, setRecipe }) => {
const user_id = localStorage.getItem('user_id')
const dispatch = useDispatch()

const cancelEdit = () => {
	setToggle( false )
}


	const handleSubmit = (e) => {
		e.persist()
    dispatch(editRecipe(recipeToEdit))
    setToggle(false)
    history.push(`/user-dash/${user_id}`)

	}

	return (
		<div>
			<form className='add-form' onSubmit={handleSubmit}>
				<input
					type='text'
					name='image'
					value={recipeToEdit.image}
					onChange={(e) => setRecipe({ ...recipeToEdit, image: e.target.value })}
					placeholder='Include an Image'
				/>
				<input
					type='text'
					name='title'
					value={recipeToEdit.title}
					onChange={(e) => setRecipe({ ...recipeToEdit, title: e.target.value })}
					placeholder='Title of Recipe'
				/>
				<input
					type='text'
					name='source'
					value={recipeToEdit.source}
					onChange={(e) => setRecipe({ ...recipeToEdit, source: e.target.value })}
					placeholder='Who taught you?'
				/>
				<input
					type='text'
					name='category'
					value={recipeToEdit.category}
					onChange={(e) => setRecipe({ ...recipeToEdit, category: e.target.value })}
					placeholder='Category'
				/>
				<textarea
					type='text'
					name='ingredients'
					value={recipeToEdit.ingredients}
					onChange={(e) => setRecipe({ ...recipeToEdit, ingredients: e.target.value })}
					placeholder='What are the Ingredients?'
				/>
				<textarea
					type='text'
					name='instructions'
					value={recipeToEdit.instructions}
					onChange={(e) => setRecipe({ ...recipeToEdit, instructions: e.target.value })}
					placeholder='Add the Instructions'
				/>
				<button type='submit'>Edit Recipe</button>
			</form>
			<button className='cancel-btn' onClick={cancelEdit}>
				Cancel
			</button>
		</div>
	)
}

export default EditRecipe
