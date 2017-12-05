import React, {Component} from 'react';

import NewRecipe from './new-recipe';

class RecipeBook extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2> Recipe-Book</h2>
        <div>
          Welcome to the Recipe-Book
        </div>

        <div>
          <NewRecipe />
        </div>
      </div>
    );
  }
}

export default RecipeBook;