import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import DUMMY_MEALS from "./mealsDatabase";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
