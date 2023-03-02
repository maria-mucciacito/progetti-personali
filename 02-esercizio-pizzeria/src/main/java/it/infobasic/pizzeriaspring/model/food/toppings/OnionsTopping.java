package it.infobasic.pizzeriaspring.model.food.toppings;

import it.infobasic.pizzeriaspring.model.food.pizza.Pizza;

public class OnionsTopping extends PizzaTopping {

    private final String name = "Onions";
    private final Integer calories = 200;
    private final Double price = 0.99;

    public OnionsTopping(Pizza pizza) {
        super(pizza);
    }

    @Override
    public Integer getCalories() {
        return calories;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        return price;
    }

    @Override
    public String getMenuItemLine() {
        return super.pizza.getName() + " topping name: " + name + " - price: " + price + " - calories: " + calories;
    }

}
