import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
  let ingredient = null;

  switch(props.type) {
  case ('bread-bottom'):
    ingredient = <div classesName={classes.BreadBottom}></div>;
    break;
  case ('bread-top'):
    ingredient = (
      <div classesName={classes.BreadBottom}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>;
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
};

export default burgerIngredient;
