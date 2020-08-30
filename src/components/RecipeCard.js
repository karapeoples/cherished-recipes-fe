import React from 'react'

const RecipeCard = ({img, title, source, ingredients, instructions, cat}) => {
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
      </div>
      <footer>
        <p>{ingredients}</p>
        <p>{instructions}</p>
      </footer>
    </div>
  )
}

export default RecipeCard
