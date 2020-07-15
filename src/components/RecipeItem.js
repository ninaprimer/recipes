import React, { Component } from "react";
import { Dimmer, Image } from "semantic-ui-react";
import RecipeDetail from "./RecipeDetail";
import axios from "axios";

const KEY = "8004f85b1c7142fba1b7767abc5d7215";

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      active: false,
    };
  }
  getRecipeData = async (recipe) => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipe.id}/information`,
      {
        params: {
          apiKey: KEY,
        },
      }
    );
    this.setState({ ...this.state, response: response.data });
  };

  handleShow = () => {
    this.setState({ ...this.state, active: true });
    if (this.state.response == null) {
      this.getRecipeData(this.props.recipe);
    }
  };

  handleHide = () => this.setState({ ...this.state, active: false });

  render() {
    const { recipe } = this.props;
    const { active, response } = this.state;

    const content = (
      <div>
        <RecipeDetail recipe={response} />
      </div>
    );

    return (
      <div className="ui card">
        <a href={response != null ? response.sourceUrl : null} target="_blank">
          <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            size="medium"
            src={recipe.image}
            alt={recipe.title}
          />
        </a>

        <div className="content">
          <div className="header">{recipe.title}</div>
          <span className="right floated">
            <i className="heart outline like icon"></i>
            {recipe.likes}
          </span>
        </div>
      </div>
    );
  }
}

//     const { recipe, onRecipeSelect } = this.props;
//     return (
//       <div className="ui card" onClick={() => onRecipeSelect(recipe)}>
//         <img className="image" src={recipe.image} alt={recipe.title} />
//         <div className="content">
//           <div className="header">{recipe.title}</div>
//           <span className="right floated">
//             <i className="heart outline like icon"></i>
//             {recipe.likes}
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// const RecipeItem = ({ recipe, onRecipeSelect }) => {
//   return (
//     <div className="ui card" onClick={() => onRecipeSelect(recipe)}>
//       <div className="ui medium image dimmable">
//         <div class="ui dimmer">
//           <div class="content">
//             <div>
//               <h2 class="ui inverted header">Title</h2>
//               <button class="ui primary button">Add</button>
//               <button class="ui button">View</button>
//             </div>
//           </div>
//         </div>
//         <img src={recipe.image} alt={recipe.title} />
//       </div>
//     </div>
//   );
// };

export default RecipeItem;
