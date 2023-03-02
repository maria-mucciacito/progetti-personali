package it.infobasic.pizzeriaspring.model.food.pizza;

public class PizzaFamilySize implements Pizza {

    private Pizza pizza;
    private final Integer addCalories = 2;
    private final Double addPrice = 4.15;
    private String name = "Family Size";

    public PizzaFamilySize(Pizza pizza) {
        this.pizza = pizza;
    }

    @Override
    public Integer getCalories() {
        return pizza.getCalories() + addCalories;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        return pizza.getPrice() + addPrice;
    }

    @Override
    public String getMenuItemLine() {
        return pizza.getName() + " calories: " + this.getCalories() + " price " + this.getPrice();
    }

}
