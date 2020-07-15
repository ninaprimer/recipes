import React from "react";

export default function RecipeDetail({ recipe }) {
  console.log(recipe);
  return recipe != null ? (
    <div>
      <div className="header">Ingredients</div>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  ) : null;
}

const styleLi = {
    textAlign = "left",
    lineHeight = "2em"
}


