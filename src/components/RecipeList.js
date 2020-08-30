import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getRecipes} from '../redux/actions'
import RecipeCard from './RecipeCard'

const RecipeList = () => {
  const allRecipes = useSelector(state => state.recipes)
  const dispatch = useDispatch()



useEffect(() => {
  dispatch(getRecipes());
  }, [dispatch])


  return (
    <div>
      {allRecipes.map((info,index) => {
        return(
            <RecipeCard key={index} img={info.image} title={info.title} source={info.source} ingredients={info.ingredients} instructions={info.instructions} cat={info.category}/>
      )})}

    </div>
  )
}

export default RecipeList

