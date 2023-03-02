package it.infobasic.pizzeriaspring.model.food.pizza.base;

import it.infobasic.pizzeriaspring.model.food.pizza.Pizza;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class PizzaBase implements Pizza {

    private Integer calories;
    private String name;
    private Double price;

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
        return name + " - calories: " + calories + " - price; " + price;
    }

}
