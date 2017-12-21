import React, { Component } from 'react';
import { Switch} from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import Home from '../components/home'
import RecipeBook from '../components/recipe-book';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recipe-book' component={RecipeBook} />
      </Switch>
    )
  }
}
