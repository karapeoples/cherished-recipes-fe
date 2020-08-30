import React, { useState } from 'react'
import Nav from './Nav'
import { useDispatch } from 'react-redux'
import {history} from '../index'
import {postNewRecipe} from '../redux/actions'

const AddRecipe = () => {
const id = localStorage.getItem('user_id')
 const dispatch = useDispatch()
const recipeObj = {
		image: '',
		title: '',
		source: '',
    ingredients: '',
    instructions: '',
    category: '',
    user_id: id
	}
	const [recipe, setRecipe] = useState(recipeObj)

	const handleChange = (e) => {
		setRecipe({
			...recipe,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(postNewRecipe(recipe))
		setRecipe(recipeObj)
	}




  return (
    <div>
      <Nav/>
      <form className='add-form' onSubmit={handleSubmit}>
        <input type="text" name='image' value={recipe.image} onChange={handleChange} placeholder='Include an Image'/>
        <input type="text" name='title' value={recipe.title} onChange={handleChange} placeholder='Title of Recipe'/>
        <input type="text" name='source' value={recipe.source} onChange={handleChange} placeholder='Who taught you?' />
        <input type="text" name='category' value={recipe.category} onChange={handleChange} placeholder='Category' />
        <textarea type="text" name='ingredients' value={recipe.ingredients} onChange={handleChange} placeholder='What are the Ingredients?'/>
        <textarea type="text" name='instructions' value={recipe.instructions} onChange={handleChange} placeholder='Add the Instructions'/>
        <button type="submit">Add Recipe</button>
      </form>
      <button className='cancel-btn' onClick={()=> history.push(`/user-dash/${id}`)}>Cancel</button>
    </div>
  )
}

export default AddRecipe
