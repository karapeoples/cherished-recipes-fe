import React, { useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import EditRecipe from './EditRecipe'
import {getRecipes} from '../redux/actions'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const RecipeCard = ({ id, img, title, source, ingredients, instructions, cat }) => {
  const recipeState = useSelector((state) => state.recipes)
  const [recipeToEdit, setRecipeToEdit] = useState({ recipeState })
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  const toggleEdit = (index) => {
    setToggle({ [index]: !false })
    const arrayWithRecipeToEdit = recipeState.filter(info => info.id === id)
    const [extractedRecipe] = arrayWithRecipeToEdit
    setRecipeToEdit(extractedRecipe)
  }
  const removeRecipe = () => {
    axiosWithAuth()
      .delete(`/recipes/${id}`)
      .then(res => {
        recipeState.filter(info => info.id !== id);
        dispatch(getRecipes())
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <div style={{ width: "25%", margin: '0 auto'}}>
        <img src={img} alt='meal' width='100%'/>
      </div>
      <div>
        <h5><b>Source:</b> <i>{source}</i></h5>
        <h5><b>Type:</b> <i>{cat}</i></h5>
        <p>{ingredients}</p>
        <p>{instructions}</p>
      </div>
      {toggle === false ?
      <footer>
       <button onClick={toggleEdit}>Edit Recipe</button>
        <button onClick={removeRecipe}>Delete</button>
        </footer>
        :
        <footer>
          <EditRecipe recipeToEdit={recipeToEdit} setRecipe={setRecipeToEdit} setToggle={setToggle}/>
        </footer>
      }
    </div>
  )
}

export default RecipeCard
