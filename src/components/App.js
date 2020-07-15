import React, { Component } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import axios from "axios";

const KEY = "8004f85b1c7142fba1b7767abc5d7215";
const apiURLlist = "https://api.spoonacular.com/recipes/findByIngredients";

export class App extends Component {
  state = {
    recipes: [],
  };

  /*componentDidMount() {
    this.onTermSubmit("");
  }*/

  onTermSubmit = async (term) => {
    const response = await axios.get(apiURLlist, {
      params: {
        ingredients: term,
        number: 2,
        apiKey: KEY,
      },
    });
    console.log(response.data, "from list api url");
    this.setState({
      recipes: response.data,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
