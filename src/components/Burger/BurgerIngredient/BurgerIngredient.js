import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render(){
    let ingredient = null;

    switch(this.props.type) {
    case ('bread-bottom'):
      ingredient = <div classesName={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingredient = (
        <div classesName={classes.BreadBottom}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      )
      break;
    case ('meat'):
      ingredient = <div classesName={classes.Meat}></div>;
      break;
    case ('cheese'):
      ingredient = <div classesName={classes.Cheese}></div>;
      break;
    case ('bacon'):
      ingredient = <div classesName={classes.Bacon}></div>;
      break;
    case ('salad'):
      ingredient = <div classesName={classes.Salad}></div>;
      break;
    default:
      ingredient = null;
    }
    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}
export default BurgerIngredient;
