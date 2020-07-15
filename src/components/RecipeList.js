import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes }) => {
  const renderedList = recipes.map((recipe) => {
    return <RecipeItem recipe={recipe} key={recipe.id} />;
  });

  return <div className="ui cards">{renderedList}</div>;
};

export default RecipeList;
