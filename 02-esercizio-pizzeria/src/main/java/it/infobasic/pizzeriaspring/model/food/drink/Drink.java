package it.infobasic.pizzeriaspring.model.food.drink;

import it.infobasic.pizzeriaspring.model.food.FoodItem;
import lombok.AllArgsConstructor;
import lombok.Setter;

@Setter
@AllArgsConstructor
public class Drink implements FoodItem {

    private String name;
    private Double price;
    private Integer calories;

    @Override
    public String getMenuItemLine() {
        return name + " - calories: " + calories + " - price:" + price;
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
    public Integer getCalories() {
        return calories;
    }

}
